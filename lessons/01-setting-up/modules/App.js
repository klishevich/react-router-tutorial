import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Hello, React Router 2!</h1>
    		<ul role="nav">
    			<li><Link to="/about2" activeStyle={{color: 'red'}}>About2 (active Red)</Link></li>
    			<li><Link to="/repos2">Repos2 (active none)</Link></li>
                <li><NavLink to="/about">About (active green)</NavLink></li>
                <li><NavLink to="/repos">Repos (active green)</NavLink></li>
    		</ul>
            {this.props.children}
    	</div>
    	)
  }
})
