var React = require('react');
var ReactFire = require( 'reactfire' );
var Firebase = require( 'firebase' );

var Header = require( './header' );
var List = require( './list' );

var rootUrl = 'https://cm-react-todos.firebaseio.com/';

var App = React.createClass({
    mixins: [ ReactFire ],
    getInitialState: function()
    {
        return {
            items: {},
            loaded: false
        }
    },
    componentWillMount: function()
    {
        var fb = new Firebase( rootUrl + 'items/' );
        this.bindAsObject( fb, 'items' ); // items == this.state.items
        fb.on( 'value', this.handleDataLoaded );
    },
    handleDataLoaded: function()
    {
        this.setState({loaded:true});
    },
    render: function() {
        console.log( this.state );
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    To-do List
                </h2>
                <Header itemsStore={this.firebaseRefs.items} />
                <div className={"content" + (this.state.loaded ? ' loaded' : '' ) }>
                    <List items={this.state.items} />
                </div>
            </div>
        </div>
        }
    });

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
