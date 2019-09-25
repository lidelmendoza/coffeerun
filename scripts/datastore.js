
(function (window) {
  'use strict';
  var App = window.App || {}; /* declared a local variable app if there already exists then that will be assigned to it otherwise default value {}*/

  function DataStore() { /* */
    this.data = {}; /* create and customize a new object and can refer to new object with term this */
  }

  DataStore.prototype.add = function (key,val) { /* will store order infor in val using customer's email(key) */
    this.data[key] = val;
  };

  DataStore.prototype.get = function (key) { /*  looks up the value for it in instance's data property*/
    return this.data[key];
  };

  DataStore.prototype.getAll = function() { /* it returns a reference to the data property */
    return this.data;
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  }

  App.DataStore = DataStore; /* datastore is attached to app object */
  window.App = App; /* ressigned the global App property to newly modified App*/
}) (window);
