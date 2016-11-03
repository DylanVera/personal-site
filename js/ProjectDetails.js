module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    
    localStorage.setItem('FireSlinger', JSON.stringify([
      {
        name: 'FireSlinger',
        image: 'http://placehold.it/350x150',
        description: 'Senior Project focusing on software development using agile method. FireSlinger is a sidescrolling 2D shooter made with in Unity. The built-in Rigidbody physics system in Unity isn\'t well suited for fast paced arcde style action games so our team created a raycast based physics engine to recreate that oldschool arcade style platforming.', 
        repo: ''
      }
    ]));
    
    localStorage.setItem('TrackDota', JSON.stringify([
      {
        name: 'TrackDota',
        image: 'http://placehold.it/350x150',
        description: "A quick personal project I worked on to learn the Android SDK. TrackDota allows you to get live updates and information about professional Dota games as they happen using Valve's own API.",
        repo: ''
      }
    ]));
    
    localStorage.setItem('Flux Shopping Cart', JSON.stringify([
      {
        name: 'Flux Cart',
        image: 'http://placehold.it/350x150',
        description: 'Prototype design for a Flux/React based e-commerce page. Data structures and views are all implemented, all that\'s missing is a payment API',
        repo: ''
      }
    ]));
  }
};