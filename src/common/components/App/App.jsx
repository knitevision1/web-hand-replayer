import React from 'react'
import { Header, Main, Foo, Bar } from 'src/common'

const App = () => (
  <div>
    <Header></Header>
    <Main>
      <Foo>
        <Bar />
      </Foo>
    </Main>
  </div>
)

export default App
