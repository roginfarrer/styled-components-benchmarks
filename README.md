# Takeaways

1. `themed` notably degrades performance, espeically in large trees
2. Inline prop interpolation is faster than the function syntax

```js
// This is slower
const Foo = styled.div(props => (
  color: props.color,
  opacity: props.disabled ? 0.5 : 1,
))

// Than this:
const Bar = styled.div({
  color: props => props.color,
  opacity: props => props.disabled ? 0.5 : 1,
})
```
