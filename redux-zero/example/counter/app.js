import React from 'react'
import ReactDOM from 'react-dom'

import Provider from '../../lib/provider'
import createStore from '../../lib/store'
import Counter from './counter'

const store = createStore({ count: 0 })
const root = document.getElementById('root')

const App  = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

ReactDOM.render(<App />, root)
