var React = require('react')
var data = require("../../data.json")/*{    
                "full_name": "Dylan Vera",
                "age": 23,
                "home_town": "Manhattan Beach, CA",
                "current_location": "Los Angeles, CA",
                "university": "CSU Long Beach",
                "major": "BS in Computer Science",
                "email": "dylan@ucode.com",
                "hobbies": ["coding", "Dota 2", "Magic: the Gathering", "esports"]
            };*/
            
var Home = React.createClass({
    render: function(){
        return(
            <div className="about-me">
                <div className="about-intro">
                    <img src="img/headshot.jpg" />
                    <div className="intro">
                        <p>
                            Hi, my name is Dylan Vera. I make games and mobile apps.
                            Here you can see my résumé and check out a few of projects I've worked on.
                        </p>
                    </div>
                </div>
                <div className="about-json">
                    <pre>
                        {JSON.stringify(data.json, null, 2)}
                    </pre>
                </div>
            </div>
        )
    }
});

module.exports = Home;