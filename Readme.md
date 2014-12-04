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

Asking is released under the MIT License.