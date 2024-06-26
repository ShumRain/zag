import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./avatar.anatomy"
import { dom } from "./avatar.dom"
import type { MachineApi, Send, State } from "./avatar.types"

export function connect<T extends PropTypes>(state: State, send: Send, normalize: NormalizeProps<T>): MachineApi<T> {
  const isLoaded = state.matches("loaded")
  const showFallback = !isLoaded

  return {
    isLoaded,
    showFallback,
    setSrc(src) {
      send({ type: "SRC.SET", src })
    },
    setLoaded() {
      send({ type: "IMG.LOADED", src: "api" })
    },
    setError() {
      send({ type: "IMG.ERROR", src: "api" })
    },

    rootProps: normalize.element({
      ...parts.root.attrs,
      dir: state.context.dir,
      id: dom.getRootId(state.context),
    }),

    imageProps: normalize.img({
      ...parts.image.attrs,
      hidden: !isLoaded,
      dir: state.context.dir,
      id: dom.getImageId(state.context),
      "data-state": isLoaded ? "visible" : "hidden",
      onLoad() {
        send({ type: "IMG.LOADED", src: "element" })
      },
      onError() {
        send({ type: "IMG.ERROR", src: "element" })
      },
    }),

    fallbackProps: normalize.element({
      ...parts.fallback.attrs,
      dir: state.context.dir,
      id: dom.getFallbackId(state.context),
      hidden: isLoaded,
      "data-state": isLoaded ? "hidden" : "visible",
    }),
  }
}
