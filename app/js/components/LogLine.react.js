var React = require('react');
var Actions = require('../actions/Actions');

var LogLine = React.createClass({
	render:function() {
		var object = this.props.newObject;

		return(
			<tr id="id">
				<td>{object.id}</td>
		    <td>{object.time}</td>
		    <td>{object.typeOb}</td>
		    <td>{object.date}</td>
				<td><a href="#" onClick={this._removeLogLine}><i>Deletar</i></a></td>
		  </tr>
		);
	},
	_removeLogLine: function(e) {
		e.preventDefault();
		console.log(e);
		var table = $('#worklog_table');
		var removeId = $('#worklog_table').find('#id').val();
		Actions.remove(removeId);
	}
});

module.exports = LogLine;
