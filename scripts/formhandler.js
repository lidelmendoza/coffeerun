(function (window) {
  'use strict';
  var App= window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if(!selector) {
      throw new Error ('No selector provided');
    }
    this.$formElement = $(selector);
    if(this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: '+selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault(); /* this ensures that submitting the form does not take the user away from page */

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', function (event) {
      //code will go here
      var emailAddress = event.target.value;
      var message = '';
      if(fn(emailAddress)){
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email adress!'
        event.target.setCustomValidity(message);
      }
    });
  };



  // FormHandler.prototype.addPayment = function (fn) {
  //   console.log('payment form is being createed');
  //   this.$formElement.
  // }


  App.FormHandler = FormHandler;
  window.App = App;
}) (window);
