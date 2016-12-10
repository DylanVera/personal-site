var React = require('react');
var Project = require('./Project.react');
var ProjectDetails = require('../ProjectDetails.json')

var Portfolio = React.createClass({
  render: function() {
    var projects = [];
    for(var i = 0; i < ProjectDetails.projects.length; i++){
      var project = ProjectDetails.projects[i];
      projects.push(<Project key={project.name} name={project.name} desc={project.description} image={project.image} repo={project.repo} />)  
    }
    
    return(
      <div className="portfolio">
        {projects}
      </div>
    );
  }
});

module.exports = Portfolio;