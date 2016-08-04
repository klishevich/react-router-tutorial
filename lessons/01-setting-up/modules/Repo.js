import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
	    <h1>Repo Component</h1>
	    <ul>
          	<li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
      	<div>User Name: {this.props.params.userName}</div>
        <div>Repo Name: {this.props.params.repoName}</div>
      </div>
    )
  }
})