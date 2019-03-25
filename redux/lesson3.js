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

const reducer = (state, action) => {
  if (!state) {
    return initialState
  }
  switch (action.type) {
    case 'edit': // 根据返回的对象是否变更去做更新
      return {
        ...state,
        text: state.text,
      }
  }
  return state
}

/**
 * 提供一个通用的方法
 * reducer函数从外部传入。加入订阅模式监听state变化，每次dispatch去执行传入已订阅的函数
 * 引入存函数概念修改state
 * @param {*} reducer 
 */
const createStore = (reducer) => {
  let state = null
  const getState = () => state
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const dispatch = (action) => {
    reducer(state, action)
    listeners.forEach(listener => listener())
  }
  dispatch() // 初始化运行，默认state
  return {
    dispatch,
    getState,
    subscribe,
  }
}

const action = { type: 'edit', text: '新书' }

const store = createStore(reducer)

console.log('pre', store.getState())
store.dispatch(action)
console.log('subscribe')
store.subscribe(() => console.log('subscribe'))
console.log('next', store.getState())