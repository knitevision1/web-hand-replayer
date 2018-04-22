import React from 'react'
import { Header, Main, Foo, Bar } from 'src/common'
import styles from './App.scss'

const App = () => (
  <div className={styles.h2}>
    <Header></Header>
    <Main>
      <Foo>
        <Bar />
      </Foo>
    </Main>
  </div>
)

export default App
