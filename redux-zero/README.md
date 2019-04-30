### design my own redux of react

##### 应该是这样的

```js
// store
const countStore = {
  'increate action': (state, action) => {
    return {
      ...state,
      ...action.payload,
    }
  },
}
```