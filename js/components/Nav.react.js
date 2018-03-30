var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

var Nav = React.createClass({
   render: function() {
        return(
            <header>
                <nav>
                    <h1 className="title-banner"><IndexLink to='/'>Dylan Vera</IndexLink></h1>
                    <ul className="nav-links">
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
            </header>
        )
   }
});


module.exports = Nav;