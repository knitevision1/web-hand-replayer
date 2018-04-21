import React from 'react'
import { replay } from 'src/common/test/replayer'
import { hand } from 'src/common/test/hand'

class Foo extends React.Component {
  constructor () {
    super()
    this.state = {
      hand: ''
    }
  }

  handleChange (el) {
    this.setState({
      hand: el.target.value
    })
  }

  handleReplay () {
    replay(hand)
  }

  render () {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10" onChange={(el) => this.handleChange(el)}></textarea>
        {this.props.children}
        <button onClick={() => this.handleReplay()}>Click</button>
      </div>
    )
  }
}

export default Foo
