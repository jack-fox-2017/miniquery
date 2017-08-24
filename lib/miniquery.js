/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  constructor() {}

  static select(selector){
    if (selector[0] == '#') {
      return document.querySelector(selector)
    }
    else {
      return document.querySelectorAll(selector)
    }
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  constructor() {}

  static hide(selector){
    let elements = document.querySelectorAll(selector)
    elements.forEach(element => {
      element.style.display = 'none'
    })
  }

  static show(selector){
    let elements = document.querySelectorAll(selector)
    elements.forEach(element => {
      element.style.display = 'block'
    })
  }

  static removeClass(nameClass, nameClass2){
    let elements = document.querySelectorAll(nameClass)
    elements.forEach(element => {
      element.classList.remove(nameClass2)
    })
  }

  static addClass(nameClass, newClass){
    let elements = document.querySelectorAll(nameClass)
    elements.forEach(element => {
      element.classList.add(newClass)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher {
   constructor() {}

   static on(className, evnt, callback) {
     let elements = document.querySelectorAll(className)
     elements.forEach(element => {
       element.addEventListener(evnt, callback())
     })
   }

   static trigger(className, evnt){
    //
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  constructor() {}

  static request(obj){
    // var oReq = new XMLHttpRequest()
    // console.log(oReq);
    // oReq.addEventListener('load', obj.success)
    // oReq.addEventListener('load', obj.fail)
    // oReq.open(obj.type, obj.url)
    // oReq.send()
    console.log('>>>>>>>>> tes demoAjax()');
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
let miniquery = (element) => {
  let query = SweetSelector.select(element)

  query.hide = () => {
    DOM.hide(element)
  }

  query.show = () => {
    DOM.show(element)
  }

  query.addClass = (newClass) => {
    DOM.addClass(element, newClass)
  }

  query.removeClass = (newClass) => {
    DOM.removeClass(element, newClass)
  }

  query.on = (element, evnt, callback) => {
    EventDispatcher.on(element, evnt, callback)
  }

  return query
}

// class Miniquery {
//   constructor(element) {
//     this.element
//   }
//
//   static hide() {
//     DOM.hide(this.element)
//   }
//
//   static show() {
//     DOM.show(this.element)
//   }
// }

let $ = miniquery
