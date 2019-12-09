// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  


  // identify the types: string (double quote), boolean, numbers, array, objects, null (double quote), undefined
  // where we will need recursion - array and objects
  // if statements for the rest

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (obj === undefined) {
    return undefined;
  }
  
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      newArray.push(stringifyJSON(obj[i]));
    }
    return '[' + newArray.join(',') + ']';
  }
  
  if (typeof obj === 'object') {
    let newArray = [];
    for (let key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        newArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + newArray.join(',') + '}';
  }

};
