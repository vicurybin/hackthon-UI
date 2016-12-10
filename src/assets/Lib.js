
import 'assets/css.css';
import C from 'assets/conf';
import M from 'assets/common';
import FastClick from 'fastclick'
// M.formatTime()
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
console.log('lib执行了')
var Rxports = {
	M,
	C


};

module.exports = Rxports

