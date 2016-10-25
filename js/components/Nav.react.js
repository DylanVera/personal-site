var React = require('react')

var Nav = React.createClass({
   render: function() {
        return(
            <div className="nav-div">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        )
   } 
});

module.exports = Nav;