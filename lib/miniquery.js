/*!
 * miniquery
 */
var miniquery = function(element){
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
      EventDispatcher.on(element, eventName, eventHandler);
    },

    trigger : function(eventName){
      EventDispatcher.trigger(element, eventName);
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
    return document.querySelectorAll(element);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(element){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      element.style.display = 'none';
    })
  },

  show : function(element){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      element.style.display = '';
    })
  },

  removeClass : function(element, className){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    })
  },

  addClass : function(element, className){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      if (element.classList)
        element.classList.add(className);
      else
        element.className += ' ' + className;
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on : function(element, eventName, eventHandler){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      element.addEventListener(eventName, eventHandler);
    })
  },

  trigger : function(element, eventName){
    var elements = SweetSelector.select(element);
    elements.forEach(element=>{
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);
      element.dispatchEvent(event);
    })
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
