// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var result = [];

  var innerFunction = function(element) {
    console.log(element);
    if (element.classList !== undefined) {
      if (element.classList.contains(className)) {
        result.push(element);
      }
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      innerFunction(element.childNodes[i]);
    }
  };
  innerFunction(document.body);
  return result;
  // base case if node includes classname
  //console.log(element.classList);
  /*if (element.classList !== undefined) {
    if (element.classList.contains(className)) {
      console.log('test');
      result.push(element);
      return result;
      // getElementsByClassName(className, element)
      // if (element.childNodes.length === 0) {}
    }
  } else {
    if (element.classList.contains(className)) {
      result.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      //console.log(element.childNodes[i]);
      // getElementsByClassName(className)
      result.push(getElementsByClassName(className, element.childNodes[i]));
    }
  }
  console.log(result);
  return result;*/
};