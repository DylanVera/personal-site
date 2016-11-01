var React = require('react');
var Project = require('./Project.react');
var projectDetails = require('../ProjectDetails.json')

var Portfolio = React.createClass({
  render: function() {
   
    return(
      <div className="portfolio">
        
        <Project />
      </div>
    )
  }
});

module.exports = Portfolio;