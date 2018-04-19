import React from 'react'
import { MyContext } from '../Context'

const Bar = () => (
  <MyContext.Consumer>
    {(context) => (
      <h2>I am {context}</h2>
    )}
  </MyContext.Consumer>
)

export default Bar
