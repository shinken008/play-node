import React from 'react'
import connect from '../../lib/connect'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.props.increment()
  }
  decrement() {
    this.props.decrement()
  }
  render() {
    console.log(this.props)
    return <div>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
    </div>
  }
}

const mapToProps = ({ count }) => ({ count })

const actions = store => ({
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 })
})

export default connect(mapToProps, actions)(Counter)