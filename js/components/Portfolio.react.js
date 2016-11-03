var React = require('react');
var Project = require('./Project.react');
//var ProjectDetails = require('../ProjectDetails.js')
var Projects = JSON.parse(localStorage.getItem('projects'));

var Portfolio = React.createClass({
  render: function() {
    console.log(Projects);

    return(
      <div className="portfolio">
        <Project />
      </div>
    );
  }
});

module.exports = Portfolio;