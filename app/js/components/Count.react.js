var React = require('react');
var Actions = require('../actions/Actions');

var Count = React.createClass({
	render:function() {
    var time=0;
    var _counter=0;
    for (newObject in this.props.data) {
      time = this.props.data[newObject].time;
        _counter =parseInt(_counter)+parseInt(time);
		}

		return(
      <ul>
        <li>
          {_counter} hours of exercicies
        </li>
      </ul>
		);
	}
});

module.exports = Count;
