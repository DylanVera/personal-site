var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({
   render: function() {
        return(
            <div className="nav-div">
                <ul className="nav-links">
                    <h1 className="title-banner">Dylan Vera</h1>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><IndexLink to="/">Projects</IndexLink></li>
                </ul>
            </div>
        )
   } 
});


module.exports = Nav;