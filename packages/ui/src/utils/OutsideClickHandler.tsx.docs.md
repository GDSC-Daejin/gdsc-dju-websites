---
title: OutsideClickHandler
---
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Props

that alerts clicks outside of the passed ref

```ts
export interface Props {
  children: ReactNode;
  outsideClick: (target: EventTarget | null) => void;
  trigger?: boolean;
}
```

```tsx
<OutsideClickHandler>
    <div>Click outside of me!</div>
</OutsideClickHandler>
```