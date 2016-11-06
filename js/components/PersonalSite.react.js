var React = require("react")

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Portfolio = require('./Portfolio.react');
var Projects = require('../ProjectDetails.json');
var Nav = require("./Nav.react");

const Container = (props) => <div><Nav />{props.children}</div>
const PortfolioContainer = (props) => <div><Portfolio projects={Projects}/></div>

var PersonalSite = React.createClass({
    render: function() {
        
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Portfolio} />
                    <Route path='/resume' component={Resume} />
                    <Route path='*' component={NotFound}></Route>
                </Route>
            </Router>
        )
    }
});

const NotFound = () => <h1>404</h1>
const Resume = () => <h1>Resume</h1>

module.exports = PersonalSite;