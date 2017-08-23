/*!
 * miniquery
 */
var miniquery = function(element) {
  var el = SweetSelector.select(element);
  return {
    hide: function() {
      DOM.hide(element)
    },
    show: function() {
      DOM.show(element)
    },
    addClass: function() {
      DOM.addClass(element, 'shaded')
    },
    removeClass: function() {
      DOM.removeClass(element, 'shaded')
    },
    on: function(eventName, eventHandler) {
      el.addEventListener(eventName, eventHandler);
    },
    trigger: function(eventName) {
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, false);
      el.dispatchEvent(event);
    },
    ajax: function(obj) {
      AjaxWrapper.request(obj);
    }

  }
}

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
// var SweetSelector = {
//   select: function(element) {
//     if (element[0] == '#') {
//       return document.querySelector(element)
//     } else {
//       return document.querySelectorAll(element)
//     }
//   }
// }

var SweetSelector = {
  select: function(element) {
    return document.querySelector(element);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide: function(param) {
    var el = document.querySelectorAll(param)
    el.forEach(element => {
      element.style.display = "none"
    })
  },
  show: function(param) {
    var el = document.querySelectorAll(param)
    el.forEach(element => {
      element.style.display = ""
    })
  },
  removeClass: function(param, param1) {
    var el = document.querySelectorAll(param)
    el.forEach(element => {
      element.classList.remove(param1)
    })
  },
  addClass: function(param, param1) {
    var el = document.querySelectorAll(param)
    el.forEach(element => {
      element.classList.add(param1)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

var EventDispatcher = {
  on: function(element, eventName, eventHandler) {
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
  request: function(obj) {
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {

        // Success!
        var resp = request.responseText;
        obj.success(resp)
      } else {
        // We reached our target server, but it returned an error
        obj.fail()
      }
    };

    request.onerror = function() {
      obj.fail()
      // There was a connection error of some sort
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
