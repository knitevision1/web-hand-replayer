import React from 'react'
import { MyContext } from '../Context'

class Provider extends React.Component {
  constructor () {
    super()
    this.state = {
      name: 'Pawa'
    }
  }

  render () {
    return (
      <MyContext.Provider state={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default Provider
