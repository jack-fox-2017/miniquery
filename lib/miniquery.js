/*!
 * miniquery
 */

let toArray = element => {
  // if type == NodeList return NodeList, else return array
  return element.length ? element : [element]
}

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

let SweetSelector = {
  select: selector => {
    if (selector[0] == '#')
      return document.querySelector(selector)
    else
      return document.querySelectorAll(selector)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

let DOM = {
  hide: selector => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      el.style.display = 'none'
    })
  },

  show: selector => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      el.style.display = ''
    })
  },

  removeClass: (selector, classes) => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      el.classList.remove(...classes.split(' '))
    })
  },

  addClass: (selector, classes) => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      el.classList.add(...classes.split(' '))
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
  on: (selector, event, callback) => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      console.log(el);
      el.addEventListener(event, callback)
    })
  },

  trigger: (selector, event) => {
    let elements = toArray(SweetSelector.select(selector))
    elements.forEach(el => {
      let e = document.createEvent('HTMLEvents')
      e.initEvent(event)
      el.dispatchEvent(e)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

let AjaxWrapper = {
  request: obj => {
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        obj.success(request.responseText)
      } else {

      }
    };

    request.onerror = function() {
      obj.fail()
    };

    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 let miniquery = {
   hide: (selector) => {DOM.hide(selector)},
   show: (selector) => {DOM.show(selector)},
   removeClass: (selector, classes) => {DOM.removeClass(selector, classes)},
   addClass: (selector, classes) => {DOM.addClass(selector, classes)},

   on: (selector, event, callback) => {EventDispatcher.on(selector, event, callback)},
   trigger: (selector, event) => {EventDispatcher.trigger(selector, event)},

   ajax: (obj) => {AjaxWrapper.request(obj)}
 }

 let $ = miniquery
