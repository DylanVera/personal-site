var React = require('react')
var PDF = require('react-pdf')

var Resume = React.createClass({
    render: function(){
        return (
            <div className="resume-frame">
                <PDF file="DylanVeraResume.pdf" page={1} className="resume"/>
            </div>
        )
    }
}); 

module.exports = Resume;
