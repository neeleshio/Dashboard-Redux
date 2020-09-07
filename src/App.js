import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import PageNotFound from './PageNotFound'
import Courses from './components/Courses/Courses'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/courses" component={Courses} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
