# Asking

Tiny utility library for getting user input in CLI programs. Based on [prompt](https://github.com/flatiron/prompt) and inspired by Ruby's [highline](https://github.com/JEG2/highline) gem.

### Installation

```
npm install asking --save
```

and in your script:

```javascript
var choose = require('asking').choose;
var ask = require('asking').ask;
```

## Examples

### ask

```javascript
ask ('Enter your email: ', function (err, email) {
	// normal input
});

ask ('Enter your password: ', { hidden: true }, function (err, password) {
	// password will be hidden in console
});

ask ('Enter a color: ', { pattern: /red|green|blue/ }, function (err, color) {
	// color must match /red|green|blue/ regular expression
});

ask ('Enter your name: ', { default: 'John Doe' }, function (err, name) {
	// name defaults to "John Doe"
});
```

### choose

```javascript
choose ('Select a color', ['red', 'green', 'blue'], function (err, color) {
	// color is one of red, green or blue
});

choose ('Choose your position', {
	junior: 'Junior Developer',
	senior: 'Senior Developer',
	master: 'Kick-ass Developer'
}, function (err, answer, position) {
	// answer is e.g. "Kick-ass Developer"
	// position is "master"
});
```

## License

The MIT License (MIT) Copyright © 2014 Vadim Demedes vdemedes@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.