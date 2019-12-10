// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  
  // things we need to use:
  // document.body
  // (element).childNodes
  // (element).classList

  // Purpose: find and return all elements and sub-elements with class name 'className'
  // call out the body and save in variable
  // check if body contains #className
  // check if there is childNodes in the body
  // 1) check if those nodes contain #className
  // 2) check if each of nodes als has childeNode and back to 1) 

  let docBody = document.body;

  let list = [];

  var loopThrough = function(parent) {
    if (parent.classList && parent.classList.contains(className)) {
      list.push(parent);
    }
    if (parent.childNodes) {
      for (let i = 0; i < parent.childNodes.length; i++) {
        loopThrough(parent.childNodes[i]);
      }
    }
  };

  loopThrough(docBody);

  return list;
};
