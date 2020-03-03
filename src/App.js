import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import Counter from './container/counter'
import Todo from './container/toDo'

class App extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/todo" component={Todo}></Route>
      </Switch>
    </Router>
  }
}

export default App