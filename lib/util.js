/**
 * Expose utilities
 */

var exports = module.exports;

exports.extend = extend;
exports.keyAt = keyAt;
exports.write = console.log;
exports.size = size;


/**
 * Utilities
 */

// extends one object with another
function extend (dest, src) {
  Object.keys(src).forEach(function (key) {
    dest[key] = src[key];
  });
  
  return dest;
}

// gets size of array or object
function size (obj) {
  return obj.length || Object.keys(obj).length;
}

// get key on index
// in array or object
function keyAt (obj, index) {
  var key = Object.keys(obj)[index];
  return isNaN(+key) ? key : +key;
}
