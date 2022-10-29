// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
*/

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return null;
  } else if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (typeof(obj) === 'number') {
    return obj.toString();
  } else if (typeof(obj) === 'boolean') {
    return obj.toString();
  } else if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      return '[]';
    } else {
      return '[' + _.map(obj, stringifyJSON) + ']';
    }
  } else if (typeof(obj) === 'object' && Array.isArray(obj) === false) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var deb = '';
      _.each(obj, function(item, key) {
        if (typeof item === 'function') {
          delete obj[key];
        } else if (item === undefined) {
          delete obj[key];
        } else {
          deb += stringifyJSON(key) + ':' + stringifyJSON(item);
          if (Object.keys(obj).length > 1) {
            deb += ',';
          }
        }
      });
      if (deb[deb.length - 1] === ',') {
        deb = deb.slice(0, -1);
      }
      return '{' + deb + '}';
    }
  }
};

