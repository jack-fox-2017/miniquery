/*!
 * miniquery
 */
// var miniquery = {
//   hide : function(element){
//     DOM.hide(element);
//   },
//   show : function(element){
//     DOM.show(element);
//   }
// }
var miniquery = function(element){
  var el = SweetSelector.select(element);
  return {
    hide : function(){
      DOM.hide(element);
    },

    show : function(){
      DOM.show(element);
    },

    addClass : function(){
      DOM.addClass(element, 'shaded');
    },

    removeClass : function(){
      DOM.removeClass(element, 'shaded');
    },

    on : function(eventName, eventHandler){
      el.addEventListener(eventName, eventHandler);
    },

    trigger : function(eventName){
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);
      el.dispatchEvent(event);
    },

    ajax : function(obj){
      AjaxWrapper.request(obj);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {
  select : function(element){
    return document.querySelector(element);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(element){
    var el = SweetSelector.select(element);
    el.style.display = 'none';
  },

  show : function(element){
    var el = SweetSelector.select(element);
    el.style.display = '';
  },

  removeClass : function(element, className){
    var el = SweetSelector.select(element);
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },

  addClass : function(element, className){
    var el = SweetSelector.select(element);
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on : function(element, eventName, eventHandler){
    var el = SweetSelector.select(element);
    el.addEventListener(eventName, eventHandler);
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request : function(obj){
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        obj.success(data);
      } else {
        // We reached our target server, but it returned an error
        obj.fail();
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      obj.fail();
    };
    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
var $ = miniquery
