import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import About2 from './modules/About2'
import Repos2 from './modules/Repos2'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
	    <Route path="/repos2" component={Repos2}/>
	    <Route path="/about2" component={About2}/>
	    <Route path="/repos" component={Repos}/>
	    <Route path="/repos/:userName/:repoName" component={Repo}/>
	    <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
