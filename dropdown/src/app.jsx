var React = require( 'react' );
var Dropdown = require( './dropdown' );

var options = {
    title: 'Choose a Dessert',
    items: [
        'Apple Pie',
        'Peach Cobbler',
        'Chocolate Cake'
    ]
};

var element = React.createElement( Dropdown, options );

React.render( element, document.querySelector( '.container' ) );