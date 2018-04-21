import React from 'react'
import { replay } from 'src/common/test/replayer'

class Foo extends React.Component {
  componentDidMount () {
    replay()
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Foo
