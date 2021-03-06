var React = require( 'react' );

module.exports = React.createClass({
    getInitialState: function(){
        return {
            text: ''
        }
    },
    render: function()
    {
        return <div className="input-group">
            <input
                type="text"
                value={this.state.text}
                onChange={this.handleInputChange}
                className="form-control" />
            <span className="input-group-btn">
                <button className="btn btn-default"
                        type="button"
                        onClick={this.handleClick}>
                    Add
                </button>
            </span>
        </div>
    },
    handleClick: function()
    {
        console.log( this.state.text );
        // send data to firebase
        this.props.itemsStore.push({
            text: this.state.text,
            done: false
        });

        this.setState( { text: '' } );
    },
    handleInputChange: function(e)
    {
        this.setState( { text: e.target.value } );
    }
});