var React = require('react');
var component = require('react').Component;

var Project = React.createClass({
    render: function() {
        return(
            <div className="project">
                <img src="http://placehold.it/350x150"/*{'img/' + this.props.image}*//>
                <div className="project-desc">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}); 

module.exports = Project;