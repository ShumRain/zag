# UI Machines

Finite state machines for accessible JavaScript components

- ✅ **Framework Agnostic:** Reuse component logic in any JavaScript framework
- ✅ **Accessible:** Components come with built-in accessibility considerations for DOM frameworks

## The problem

With the rise of design systems and component-driven development, there's an endless re-implementation of common
component patterns (Tabs, Menu, Modal, etc.) in multiple frameworks.

Most of these implementations seem to be fairly similar in spirit, the only difference is that they use framework
specific idioms (like `useEffect` in React.js). They tend to grow in complexity over time and often become hard to
understand, debug, improve or test.

## Solution

`UI Machines` is a lightweight solution that implements common component patterns using the state machine and XState
methodology.

## Installation

```sh
npm i --save @ui-machines/<component>

# or

yarn add @ui-machines/<component>
```

For framework specific solutions, we provide simple wrappers to help you consume the component state machines.

- ⚛️ `@ui-machines/react` - React hooks for consuming machines in React applications
- 💚 `@ui-machines/vue` - Vue composition for consuming machines in Vue applications
- 🎷 `@ui-machines/solid` - Solid.js utilities for consuming machines in Solid.js applications

## Examples

### React

```jsx
import * as Toggle from "@ui-machines/toggle"
import { useMachine, useMemo } from "@ui-machines/react"

function Example() {
  // if you need access to `state` or `send` from machine
  const [state, send] = useMachine(Toggle.machine)

  // convert machine details into `DOM` props
  const toggle = useMemo(() => Toggle.connect(state, send), [state])

  // consume into components
  return <button {...toggle.buttonProps}>Toggle me</button>
}
```

## Guiding Principles

- All component machine and tests are modelled according to the
  [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices/)
- Write test helpers for every component based on the WAI-ARIA spec.
- All machines should be light-weight, simple, and easy to understand.
- Avoid using complex machine concepts like spawn, nested states, etc.

## Inspirations

- [Guillermo Rauch on Merging Design and Development](https://youtu.be/3hccXiXI0u8)
- [Thoughts on Pure UI](https://rauchg.com/2015/pure-ui) - Guillerma Rauch

## Issues

Looking to contribute? Look for the **Good First Issue** label.

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps maintainers prioritize
what to work on.

## Components ideas

- https://component.kitchen/elix
- https://vaadin.com/docs/latest/ds/components/accordion
- https://develop.kde.org/hig/components/
- https://ui.toast.com/
- https://github.com/microsoft/vscode/tree/10ee2d658517dae516ee9ac4af31dd5f883fe778/src/vs/base/browser/ui
