var React = require('react');
var component = require('react').Component;

var Project = React.createClass({
    render: function() {
        return(
            <div className="project">
                <img src="http://placehold.it/350x150"/*{'img/' + this.props.product.image}*//>
                <h1>barf</h1>
                <p>stuff</p>
            </div>
        );
    }
}); 

module.exports = Project;