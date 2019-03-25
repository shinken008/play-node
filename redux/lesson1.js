/**
 * 1.单一的数据源
 * 2.不可变状态
 * 3.只能纯函数触发改变
 */

const initialState = {
  title: '书',
  content: '关于什么...书'
}

const dispatch = (action) => {
  switch (action.type) {
    case 'edit':
      initialState.title = action.text
      break;
    default:
      break;
  }
}


const getState = () => {
  return initialState
}

/**
 * store用dispatch函数触发action
 * store用getState函数拿到下一次的状态
 */
const createStore = () => {
  return {
    dispatch,
    getState,
  }
}

const action = { type: 'edit', text: '新书' }

const store = createStore()

console.log('pre', store.getState())
store.dispatch(action)
console.log('next', store.getState())