
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _objects = [];



var currentId = 0;


function create(newObject) {
  _objects[currentId] = {
    id: currentId,
    time: newObject.time,
    typeOb: newObject.typeOb,
    date: newObject.date
  };
  currentId+=1;
}


function save(object) {
  _objects[object.id] = {
    id: object.id,
    name: object.name,
    typeOb: object.typeOb,
    date: object.date
  };
}


function remove(removeId) {
  if (_objects.hasOwnProperty(removeId)) {
    delete _objects[removeId];
  }
}


var Store = assign({}, EventEmitter.prototype, {


  getAll: function() {
    return _objects;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },


  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case Constants.CREATE:
      text = action.time.trim();
      if (text !== '') {
        create(action);
        Store.emitChange();
      }
      break;

    case Constants.EDIT:
      edit(action);
      Store.emitChange();
      break;

    case Constants.SAVE:
      save(action);
      Store.emitChange();
      break;

    case Constants.REMOVE:
      remove(action.id);
      Store.emitChange();
      break;

    default:
  }
});

module.exports = Store;
