/**
 * 1.单一的数据源
 * 2.不可变状态
 * 3.只能纯函数触发改变
 */
// 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。

const initialState = {
  title: '书',
  content: '关于什么...书'
}

const stateChange = (state, action) => {
  switch (action.type) {
    case 'edit':
      state.title = action.text
      break;
    default:
      break;
  }
}

/**
 * 提供一个通用的方法
 * state stateChange函数从外部传入。加入订阅模式监听state变化，每次dispatch去执行传入已订阅的函数
 * @param {*} state 
 * @param {*} stateChange 
 */
const createStore = (state, stateChange) => {
  const getState = () => state
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const dispatch = (action) => {
    stateChange(state, action)
    listeners.forEach(listener => listener())
  }
  
  return {
    dispatch,
    getState,
    subscribe,
  }
}

const action = { type: 'edit', text: '新书' }

const store = createStore(initialState, stateChange)

console.log('pre', store.getState())
store.dispatch(action)
console.log('subscribe')
store.subscribe(() => console.log('subscribe'))
console.log('next', store.getState())