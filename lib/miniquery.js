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

  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
