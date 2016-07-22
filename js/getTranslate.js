/**
 * getTranslate.js
 * @memberOf util
 * @param  {DOM} el   dom element
 * @param  {string} axis 维度
 * @return {number}      translate
 */
 module.exports = function (el, axis) {
 	var matrix, curTransform, curStyle, transformMatrix;

    // automatic axis detection
    if (typeof axis === 'undefined') {
        axis = 'x';
    }

    curStyle = window.getComputedStyle(el, null);
    if (window.WebKitCSSMatrix) {
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
    } else {
        transformMatrix = curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix)
            curTransform = transformMatrix.m41;
        //Crazy IE10 Matrix
        else if (matrix.length === 16)
            curTransform = parseFloat(matrix[12]);
        //Normal Browsers
        else
            curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        //Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix)
            curTransform = transformMatrix.m42;
        //Crazy IE10 Matrix
        else if (matrix.length === 16)
            curTransform = parseFloat(matrix[13]);
        //Normal Browsers
        else
            curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
}