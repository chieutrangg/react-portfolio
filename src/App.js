import React from 'react'
import GlobalStyle from './globalStyles'
import '../node_modules/normalize.css/'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'
import { Switch, Route } from 'react-router-dom'
import Main from "./components/Main"

const App = () => {
  return (
    <div>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component ={Main}/>

      </Switch>
    </ThemeProvider>
    </div>
  )
}

export default App