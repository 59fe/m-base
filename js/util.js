/**
 * util
 * @author caihuazhi
 * @create 16/1/11
 */

!(function (global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(global);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(global);
    } else {
        global.util = factory(global);
    }
})(typeof window !== 'undefined' ? window : this, function (global) {
    'use strict';

    var util = {
        /**
         * Safe chained function
         *
         * Will only create a new function if needed,
         * otherwise will pass back existing functions or null.
         *
         * @returns {function|null}
         * @from https://github.com/react-component/util/
         */
        createChainedFunction: function () {
            var args = arguments;
            return function chainedFunction() {
                for (var i = 0; i < args.length; i++) {
                    if (args[i] && args[i].apply) {
                        args[i].apply(this, arguments);
                    }
                }
            }
        },

        /**
         * create a component only id
         *
         * @param props
         * @returns {string}
         */
        createComponentId: function () {
            var __cachedId = +new Date();

            return function (props) {
                if (props && props.id) return props.id;
                return '_msui_component_' + __cachedId++;
            }
        }(),

        /**
         * 创建一个唯一的随机戳
         *
         * @param props
         * @returns {string}
         */
        createRandomStamp: function () {
            return Math.random().toString(16).substring(2);
        },

        /**
         * listener event once
         * @param  {DOM}   dom
         * @param  {string}   eventName
         * @param  {Function} callback
         */
        one: function (dom, eventName, callback) {
            function fireCallback (e) {
                if (e.target !== dom) return;
                callback(e);
                dom.removeEventListener(eventName, fireCallback);
            }
            if (callback) {
                dom.addEventListener(eventName, fireCallback);
            }
        }
    };

    return util
});
