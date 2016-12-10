var React = require('react');
var component = require('react').Component;

var Project = React.createClass({
    render: function() {
        return(
            <div className="project">
                <img className="screenShot" src={"img/" + this.props.image} alt="uh..." />
                <div className="project-desc">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.desc}</p>
                    <a className="repo-link" href={this.props.repo}>Code</a>
                </div>
            </div>
        );
    }
}); 

module.exports = Project;