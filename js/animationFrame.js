/**
 * animationFrame.js
 * @memberOf util
 * @type {Object}
 */
module.exports = {
	/**
     * requestAnimationFrame
     * @param  {Function} callback
     * @return {*}        requestAnimationFrameId
     */
    requestAnimationFrame: function (callback) {
        if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
        else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
        else {
            return window.setTimeout(callback, 1000 / 60);
        }
    },

    /**
     * cancelAnimationFrame
     * @param  {*} id requestAnimationFrameId
     * @return {*} 
     */
    cancelAnimationFrame: function (id) {
        if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
        else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
        else {
            return window.clearTimeout(id);
        }
    }
};