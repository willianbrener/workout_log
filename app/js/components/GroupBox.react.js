var React = require('react');
var Actions = require('../actions/Actions');


var GroupBox = React.createClass({
	render:function() {
		return(
				<form id="worklog_form" onSubmit={this._saveObject}>
				 <fieldset>
					 <legend>Insert a item:</legend>
					 	<div id="row">
						    <input placeholder="Time spent" id="work_time" type="number"/>

								<select id="work_type">
									 <option value="Run">Run</option>
									 <option value="Swimming">Swimming</option>
									 <option value="Bike">Bike</option>
								</select>

								<input type="text" id="work_date"/>
						</div>
						<button type="submit">Add</button>
				 </fieldset>
			 </form>
				);
	},


	_saveObject: function(e) {
		e.preventDefault();
		var newObject = {};
		var form = $('#worklog_form');


		newObject.time = form.find('#work_time').val();
		newObject.typeOb = form.find('#work_type').val();
		newObject.date = form.find('#work_date').val();

		Actions.create(newObject);

		this._clearForm();
	},


	_clearForm: function() {
		var form = $('#worklog_form');

		form.find('#work_name').val('');
		form.find('#work_phone').val('');
		form.find('#work_email').val('');
	}
});

module.exports = GroupBox;
