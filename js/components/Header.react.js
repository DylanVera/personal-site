var React = require("react")
var Nav = require("./Nav.react")

var Header = React.createClass({
    render: function() {
        return(
            <div className="header-nav">
                <Nav />
            </div>
        )
    }
});

module.exports = Header;