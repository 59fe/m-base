var supportTouch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch);

module.exports = {
	start: supportTouch ? 'touchstart' : 'mousedown',
	move: supportTouch ? 'touchmove' : 'mousemove',
	end: supportTouch ? 'touchend' : 'mouseup'
};