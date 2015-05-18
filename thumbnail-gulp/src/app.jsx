var React = require( 'react' );
var ThumbnailList = require( './thumbnail-list' );

var options = {
    thumbnailData: [
        {
            title: 'Show Courses',
            number: 816,
            header: 'Learn React.js',
            description: 'React is an excellent JavaScript library for scripting front end content. React is an excellent JavaScript library for scripting front end content.',
            imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
        },
        {
            title: 'Sent',
            number: 311,
            header: 'Learn Gulp.js',
            description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
            imageUrl: 'http://brunch.io/images/others/gulp.png'
        }
    ]
};

var element = React.createElement( ThumbnailList, options );

React.render( element, document.querySelector( '.container' ) );