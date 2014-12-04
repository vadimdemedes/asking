/**
 * Dependencies
 */

var prompt = require('prompt');
var util = require('./util');

var extend = util.extend;
var keyAt = util.keyAt;
var write = util.write;
var size = util.size;


/**
 * Expose methods
 */

var exports = module.exports;

exports.choose = choose;
exports.ask = ask;


// configure prompt
prompt.message = '';
prompt.delimiter = '';
prompt.colors = false;


/**
 * Methods
 */

// single question, single answer
function ask (question, options, callback) {
  if ('function' === typeof options) {
    callback = options;
    options = {};
  }
  
  prompt.start();
  
  // extending default options
  // with custom options
  // for prompt module
  options = extend({
    description: question
  }, options || {});
  
  prompt.get(options, function (err, result) {
    if (callback) callback(err, result.question);
  });
}

// single question, multiple answers
function choose (question, answers, options, callback) {
  if ('function' === typeof options) {
    callback = options;
    options = {};
  }
  
  var length = size(answers);
  
  if (1 === length) {
    var key = keyAt(answers, 0);
    var value = answers[key];
    return callback(null, value, key);
  }
  
  // output a numbered list of answers
  var index = 1;
  for (var key in answers) {
    if (answers.hasOwnProperty(key)) write(index++ + '.', answers[key]);
  }
  
  ask(question, options, function (err, answer) {
    answer = +answer - 1;
    
    var key = keyAt(answers, answer);
    var value = answers[key];
    
    if (undefined == key || undefined == value) {
      err = new Error('Invalid answer');
      return callback(err);
    }
    
    if (callback) callback(err, value, key);
  });
}
