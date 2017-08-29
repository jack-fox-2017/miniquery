/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

let SweetSelector = {
  select : (param) => {
    let elements = document.querySelectorAll(param)
    return elements
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

let DOM = {
  hide : function(param){
    let hideDom = SweetSelector.select(param)
    hideDom.forEach(hideDoc => {
      hideDoc.style.display = "none";
    })
  },
  
  show : function(param) {
    let showDom = SweetSelector.select(param)
    showDom.forEach(showDoc => {
      showDoc.style.display = "block"
    })
  },
  
  removeClass : function(param, property){
    let removeDom = SweetSelector.select(param)
    removeDom.forEach(removeDoc => {
      removeDoc.classList.remove(property)
    })
  },
  
  addClass : function(param, property){
    let addDom = SweetSelector.select(param)
    addDom.forEach(addDoc => {
      addDoc.classList.add(property)
    })
  } 
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
  on : function(element, eventName, callback){
    let el = SweetSelector.select(element)
    el.forEach(e => {
      e.addEventListener(eventName, callback)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
  request : option => {
    let req = new XMLHttpRequest()
    console.log(req);
    req.addEventListener("load", option.success)
    req.addEventListener("error", option.fail)
    req.open(option.type, option.url)
    req.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 // var miniquery = (data)=>{
 //   let task = SweetSelector.select(data)
 //   task.hide = ()=>{ DOM.hide(data)}
 //   task.show = ()=>{DOM.show(data)}
 //   task.addClass= (newKlass)=>{DOM.addClass(data,newKlass)}
 //   task.removeClass = (newKlass)=>(DOM.removeClass(data,newKlass))
 //   task.on = (newKlass,callback)=>{EventDispatcher.on(data,newKlass,callback)}
 //   return task
 // }

 var miniquery = function (el) {
   return {
     hide : function () {
       DOM.hide(el)
     },
     show : function () {
       DOM.show(el)
     }
   }
 }
var $ = miniquery
