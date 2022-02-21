import React from 'react'
import GlobalStyle from './globalStyles'
import '../node_modules/normalize.css/'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'
import { Switch, Route } from 'react-router-dom'
// Components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"


const App = () => {
  return (
    <div>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component ={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/blog" component={BlogPage}/>
       <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skills" component={MySkillsPage}/>
      </Switch>
    </ThemeProvider>
    </div>
  )
}

export default App