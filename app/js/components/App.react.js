var React = require('react');
var GroupBox = require('./GroupBox.react');
var List = require('./List.react');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');
var Count = require('./Count.react');


function getObjectsState() {
  return {
    allObjects: Store.getAll()
  };
}

var App = React.createClass({
  getInitialState: function() {

    this._initializeObjects();
    return getObjectsState();
  },
  componentDidMount: function() {
		Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },
	render: function() {

    return(
      <ul>
        <GroupBox/>
        <List data={this.state.allObjects}/>
        <Count data={this.state.allObjects}/>
      </ul>

    );
  },

  _onChange: function() {
    this.setState(getObjectsState());

  },
  _initializeObjects: function() {

    var objects = [];
        objects.forEach(function(obj) {
        	Actions.create(obj);
        });
  }

});

module.exports = App;
