(self["webpackChunklanding_test"] = self["webpackChunklanding_test"] || []).push([["mf-dep__mfsu-dev_mf-va_rc-tween-one_lib_plugin_ChildrenPlugin_js"],{

/***/ "./.mfsu-dev/mf-va_rc-tween-one_lib_plugin_ChildrenPlugin.js":
/*!*******************************************************************!*\
  !*** ./.mfsu-dev/mf-va_rc-tween-one_lib_plugin_ChildrenPlugin.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_tween_one_lib_plugin_ChildrenPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-tween-one/lib/plugin/ChildrenPlugin */ "./node_modules/rc-tween-one/lib/plugin/ChildrenPlugin.js");
/* harmony import */ var rc_tween_one_lib_plugin_ChildrenPlugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_tween_one_lib_plugin_ChildrenPlugin__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((rc_tween_one_lib_plugin_ChildrenPlugin__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./node_modules/rc-tween-one/lib/plugin/ChildrenPlugin.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-tween-one/lib/plugin/ChildrenPlugin.js ***!
  \****************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable func-names */

var ChildrenPlugin = function ChildrenPlugin(target, vars) {
  this.target = target;
  this.vars = vars;
};

ChildrenPlugin.prototype = {
  name: 'Children',
  getAnimStart: function getAnimStart() {
    var formatMoney = this.vars.formatMoney;

    var opts = {
      thousand: formatMoney && formatMoney.thousand || ',',
      decimal: formatMoney && formatMoney.decimal || '.'
    };
    var rep = new RegExp('\\' + opts.thousand, 'g');
    this.start = this.vars.startAt || {
      value: parseFloat(this.target.innerHTML.replace(rep, '').replace(opts.decimal, '.')) || 0
    };
  },
  toMoney: function toMoney(v, _opts) {
    var opts = {
      thousand: _opts.thousand || ',',
      decimal: _opts.decimal || '.'
    };
    var negative = parseFloat(v) < 0 ? '-' : '';
    var numberArray = v.toString().split('.');
    var base = Math.abs(parseInt(numberArray[0], 10)).toString();
    var mod = base.length > 3 ? base.length % 3 : 0;
    var decimal = numberArray[1];
    return '' + negative + (mod ? '' + base.substr(0, mod) + opts.thousand : '') + base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + opts.thousand) + (decimal ? '' + opts.decimal + decimal : '');
  },
  setRatio: function setRatio(ratio) {
    var _vars = this.vars,
        value = _vars.value,
        floatLength = _vars.floatLength,
        formatMoney = _vars.formatMoney;

    var v = (value - this.start.value) * ratio + this.start.value;
    if (typeof floatLength === 'number') {
      if (floatLength) {
        v = v.toFixed(floatLength);
        var numberArray = v.toString().split('.');
        var decimal = numberArray[1] || '';
        decimal = decimal.length > floatLength ? decimal.substring(0, floatLength) : decimal;
        var l = floatLength - decimal.length;
        if (l) {
          Array(l).fill(0).forEach(function (num) {
            decimal += '' + num;
          });
        }
        v = numberArray[0] + '.' + decimal;
      } else {
        v = Math.round(v);
      }
    }
    v = formatMoney ? this.toMoney(v, formatMoney) : v;
    this.target.innerHTML = v;
  }
};

exports.default = ChildrenPlugin;
module.exports = exports['default'];

/***/ })

}]);