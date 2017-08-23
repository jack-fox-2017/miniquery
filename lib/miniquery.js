/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

var SweetSelector = {
  select: selector => {
    if(selector[0] == '#'){
      return document.querySelector(selector)
    } else {
      return document.querySelectorAll(selector);
    }
  }
}

// var SweetSelector = {
//   select: selector => {
//       return document.querySelectorAll(selector);
//   }
// }
/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide: selector => {
    SweetSelector.select(selector).forEach( el => {
      el.style.display = 'none';
    })
  },
  show: selector => {
    SweetSelector.select(selector).forEach( el => {
      el.style.display = '';
    })
  },
  removeClass: (selector,classes) => {
    SweetSelector.select(selector).forEach( el => {
      el.classList.remove(classes.split(' '));
    })
  },
  addClass: (selector,classes) => {
    SweetSelector.select(selector).forEach( el => {
      el.classList.add(classes.split(' '));
    })
  }
}
/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 var EventDispatcher = {
   on: (selector, event, callback) => {
     SweetSelector.select(selector).forEach( el => {
       el.addEventListener(event, callback);
     })
   }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 var AjaxWrapper = {
   request: obj => {
     var request = new XMLHttpRequest();
     request.open(obj.type, obj.url, true);

     request.onload = function() {
       if (request.status >= 200 && request.status < 400) {
         // Success!
         obj.success(request.responseText);
       } else {
         obj.fail()
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

 var miniquery = {
   hide: (selector) => {DOM.hide(selector)},
   show: (selector) => {DOM.show(selector)},
   removeClass: (selector,classes) => {DOM.removeClass(selector,classes)},
   addClass: (selector,classes) => {DOM.addClass(selector,classes)},
   on: (selector, event, callback) => {EventDispatcher.on(selector, event, callback)},
   request: (obj) => {AjaxWrapper.request(obj)}
}

let $ = miniquery;
