/*!
 * minQuery
 */

var SweetSelector = {
  select: function (domSelector) {
    var selector = domSelector.substr(0,1);

    if (selector == "#" || selector == "." ) {
      var domSelector = domSelector.replace(selector,'');
    }
    if(selector == "#") {
      console.log("ID");
      var obj = document.getElementById(domSelector);
      return obj;
    } else if(selector == ".") {
      var obj = document.getElementsByClassName(domSelector);
      return obj[0];
    } else {
      var obj = document.getElementsByTagName(domSelector);
      return obj;
    }
  }
}

//  Module Pattern
var DOM = (function () {
  return {
    hide: function (el) {
      var el = el.replace('.','');
      var div = document.getElementsByClassName(el);
      div[0].style.visibility = "hidden";
    },
    show: function(el) {
      var el = el.replace('.','');
      var div = document.getElementsByClassName(el);
      div[0].style.visibility = "visible";
    }
  };

})();

//  Object literal
// var DOM = {
//   hide: function(el) {
//     var el = el.replace('.','');
//     var div = document.getElementsByClassName(el);
//     div[0].style.visibility = "hidden";
//     // div[0].style.display = "none";
//   },
//   show: function(el) {
//     var el = el.replace('.','');
//     var div = document.getElementsByClassName(el);
//     div[0].style.visibility = "visible";
//     // div[0].style.display = "none";
//   },
//   addClass: function(className) {

//   },
//   removeClass: function(className) {

//   }
// }

// var event = new Event('build');
// $('.klass').addEventListener('build', function (e) {console.log("hello")}, false);
// $('.klass').dispatchEvent(event)

var EventDispatcher = (function () {

  return {
    on: function (elem, event, action) {
      var el = SweetSelector.select(elem);
      el.addEventListener('shadi', action, false);
    },

    trigger: function (elem, event) {
      var el = SweetSelector.select(elem);

      var e = new Event(event);
      el.dispatchEvent(e);
    }
  };

})();

var AjaxWrapper = (function () {
  return {

  }
})();