/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select: function(el) {
     return document.querySelectorAll(el);
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {
  hide: function(el) {
    selectedElement = SweetSelector.select(el);
    for (let i=0; i<selectedElement.length; i++) {
      selectedElement[i].style.visibility = "hidden"
    }
  },
  show: function(el) {
    selectedElement = SweetSelector.select(el);
    for (let i=0; i<selectedElement.length; i++) {
      selectedElement[i].style.visibility = "visible"
    }
  },
  addClass: function(el, el2) {
    selectedElement = document.getElementsByClassName(el.slice(1))
    for (let i=0; i<selectedElement.length; i++) {
      selectedElement[i].classList.add(el2)
    }
  },
  removeClass: function(el, removeEl) {
    selectedElement = document.getElementsByClassName(el.slice(1))
    for(let i=0; i<selectedElement.length; i++) {
      selectedElement[i].classList.remove(removeEl)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
var EventDispatcher = {
  on: function (el, event, callback) {
    let selectedElement = SweetSelector.select(el)
    for (let i=0; i<selectedElement.length; i++) {
      selectedElement[i].addEventListener(event, callback)
    }
  },
  trigger: function(el, event) {
    event = new Event(event);
    let selectedElement = SweetSelector.select(el)
    for (let i=0; i<selectedElement.length; i++) {
      selectedElement[i].dispacthEvent(event)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
var AjaxWrapper = {
  request: function(obj) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("error", obj.fail)
    oReq.addEventListener("load", obj.success)
    oReq.open(obj.type, obj.url)
    oReq.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 var miniquery = function (el ="") {
   var selectedElement = document.querySelectorAll(el)
   return {
     hide: function() {
       for(let i=0; i<selectedElement.length; i++) {
         selectedElement[i].style.visibility = "hidden"
       }
     },
     show: function(added) {
       for (let i=0; i<selectedElement.length; i++) {
         selectedElement[i].classList.add(added)
       }
     },
     removeClass: function(removed) {
       for (let i=0; i<selectedElement.length; i++) {
         selectedElement[i].classList.remove(removed)
       }
     },
     on: function(event, callback) {
       for (let i=0; i<selectedElement.length; i++) {
         selectedElement[i].addEventListener(event, callback);
       }
     },
     trigger: function(event) {
       event = new Event(event);
       for (let i=0; i<selectedElement.length; i++) {
         selectedElement[i].dispacthEvent(event)
       }
     }
   }
 }

miniquery.ajax = function(obj) {
  var oReq = newXMLHttpRequest();
  oReq.addEventListener("error", obj.fail)
  oReq.addEventListener("load", obj.success)
  oReq.open(obj.type, obj.url)
  oReq.send()
}

var $ = miniquery
