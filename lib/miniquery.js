/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
  select : function(element) {
    return document.querySelectorAll(element);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
let DOM = {
  hide : function(element) {
    let elements = SweetSelector.select(element);
    // console.log(elements);
    // elements.style.display = "none"
    elements.forEach(list => {
      list.style.display = "none";
    })
  },
  show : function(element) {
    let elements = SweetSelector.select(element);
    elements.forEach(list => {
      list.style.display = "block";
    })
  },
  addClass : function(el1, el2) {
    let elements = SweetSelector.select(el1);
    elements.forEach(list => {
      list.classList.add(el2);
    })
  },
  removeClass : function(el1, el2) {
    let elements = SweetSelector.select(el1);
    elements.forEach(list => {
      list.classList.remove(el2);
    })
  }
} // DOM

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
  on : function(element, event, callback) {
    let elements = SweetSelector.select(element);
    elements.forEach(list => {
      list.addEventListener(event, e => callback())
     })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request : function (params) {
    var oReq = new XMLHttpRequest();
    console.log(oReq);
    oReq.addEventListener('load', params.success)
    oReq.addEventListener('error', params.fail)
    oReq.open(params.type, params.url)
    oReq.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

let miniquery = (element) => {
  let query  = SweetSelector.select(element);
  query.hide = function() { DOM.hide(element) }
  query.show = function() { DOM.show(element) }
  query.addClass = function(newClass) { DOM.addClass(element, newClass) }
  query.removeClass = function(newClass) { DOM.show(element, newClass) }
  query.on = function(element, event, callback) { EventDispatcher.on(element, event, callback) }
  query.ajax = function(params) { AjaxWrapper.request(params) }

  return query;
}

let $ = miniquery;