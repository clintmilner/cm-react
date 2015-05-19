// show a btn and a list
// should know about user state

var React = require( 'react' );
var Button = require( './button' );
var List = require( './list' );

module.exports = React.createClass({
    handleClick: function(){
        console.info( 'hi from dropdown' );
    },
   render: function()
   {
       return <div className="dropdown">
            <Button
                whenClicked={this.handleClick}
                className="btn-default"
                title={this.props.title}
                subTitleClassName="caret" />
       </div>
   }
});



// Lecture 19