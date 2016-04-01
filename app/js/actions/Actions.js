
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  create: function(newObject) {
    AppDispatcher.dispatch({
      actionType: Constants.CREATE,
      time: newObject.time,
      typeOb: newObject.typeOb,
      date: newObject.date
    });
  },


  save: function(object) {
    AppDispatcher.dispatch({
      actionType: Constants.SAVE,
      id: object.id,
      time: object.time,
      typeOb: object.typeOb,
      date: object.date
    });
  },


  remove: function(removeId) {
    AppDispatcher.dispatch({
      actionType: Constants.REMOVE,
      id: removeId
    });
  }

};

module.exports = Actions;
