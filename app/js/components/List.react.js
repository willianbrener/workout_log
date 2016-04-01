var React = require('react');
var LogLine = require('./LogLine.react');

var List = React.createClass({
	render:function() {
		var objects=[];

		for (newObject in this.props.data) {
			objects.push(<LogLine newObject={this.props.data[newObject]} />);
		}
		return(
			<table id="worklog_table" onSubmit={this._saveObject}>
			  <tr>
					<th></th>
			    <th>Tempo</th>
			    <th>Tipo</th>
			    <th>Data</th>
			  </tr>
				{objects}
			</table>
	);
}

});

module.exports = List;
