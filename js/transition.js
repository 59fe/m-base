/**
 * transition.js
 * @type {Object}
 */
module.exports = {
	setTransitionDur: function (elem, dur) {
		if (typeof dur !== 'string') {
            dur = dur + 'ms';
        }
        elem.style.webkitTransitionDuration = elem.style.transitionDuration = dur;
        return elem
	},

	setTransform: function (elem, transf) {
		elem.style.webkitTransform = elem.style.transform = transf;
		return elem
	}
};