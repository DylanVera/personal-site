var React = require('react')
var data = {
                "full_name": "Dylan Vera",
                "age": 23,
                "home_town": "Manhattan Beach, CA",
                "current_location": "Los Angeles, CA",
                "university": "CSU Long Beach",
                "major": "BS in Computer Science",
                "hobbies": ["coding", "Dota 2", "Magic: the Gathering", "esports"]
            };
            
var Home = React.createClass({
    render: function(){
        return(
            <div className="about-json">
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        )
    }
});

module.exports = Home;