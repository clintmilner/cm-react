var React = require( 'react' );

module.exports = React.createClass({
    render: function(){
        return <button className="btn btn-xl btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.number}</span>
        </button>
    }
});