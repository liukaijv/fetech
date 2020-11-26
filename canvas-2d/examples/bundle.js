(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CS = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sprite = _interopRequireDefault(require("./sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Button = /*#__PURE__*/function (_Sprite) {
  _inherits(Button, _Sprite);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  return Button;
}(_sprite.default);

exports.default = Button;

},{"./sprite":6}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sprite = _interopRequireDefault(require("./sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Image = /*#__PURE__*/function (_Sprite) {
  _inherits(Image, _Sprite);

  var _super = _createSuper(Image);

  function Image() {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.call(this);
    _this._img = null;
    return _this;
  }

  _createClass(Image, [{
    key: "draw",
    value: function draw(ctx) {
      if (this._img) {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage
        ctx.drawImage(this._img, 0, 0, this.width, this.height);
      }
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var img = new window.Image();
      img.src = url;

      img.onload = function () {
        _this2._onLoaded(img);
      };
    }
  }, {
    key: "_onLoaded",
    value: function _onLoaded(img) {
      this._img = img;
      this.width = this.width || img.width;
      this.height = this.height || img.height;
    }
  }]);

  return Image;
}(_sprite.default);

exports.default = Image;

},{"./sprite":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _image.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _sprite.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _text.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Render", {
  enumerable: true,
  get: function get() {
    return _render.default;
  }
});
exports.stage = void 0;

var _image = _interopRequireDefault(require("./image"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _text = _interopRequireDefault(require("./text"));

var _button = _interopRequireDefault(require("./button"));

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 全局stage
var stage;
exports.stage = stage;
var initialized = false;

function init(canvas, width, height) {
  var bg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000";

  if (initialized) {
    console.log("has initialized");
    return;
  }

  initialized = true;
  exports.stage = stage = new _sprite.default();
  stage.width = width;
  stage.height = height;
  var ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true; // 设置画面大小用的是canvas.width，canvas.height而不是canvas.style.width，canvas.style.height

  canvas.width = width;
  canvas.height = height;
  canvas.style.backgroundColor = bg;
  new _render.default(ctx, stage);
}

},{"./button":1,"./image":2,"./render":5,"./sprite":6,"./text":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/transform
 *  a    c    e
 * [b    d    f]
 *  0    0    1
 */
var Matrix = /*#__PURE__*/function () {
  /**
   * @param a 缩放或旋转时影响像素沿x轴定位
   * @param b 缩放或旋转时影响像素沿y轴定位
   * @param c 倾斜或旋转时影响像素沿x轴定位
   * @param d 倾斜或旋转时影响像素沿y轴定位
   * @param e 沿x轴平移距离
   * @param f 沿y轴平移距离
   */
  function Matrix() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Matrix);

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
  }

  _createClass(Matrix, [{
    key: "translate",
    value: function translate(x, y) {
      this.e += x;
      this.f += y;
      return this;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      this.a *= x;
      this.d *= y;
      this.c *= x;
      this.b *= y;
      this.e *= x;
      this.f *= y;
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(deg) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      var sin = Math.sin(deg);
      var cos = Math.cos(deg);
      this.a = a * cos + b * sin;
      this.b = -a * sin + b * cos;
      this.c = c * cos + d * sin;
      this.d = -c * sin + cos * d;
      this.e = cos * e + sin * f;
      this.f = cos * f - sin * e;
      return this;
    }
  }, {
    key: "skew",
    value: function skew(x, y) {
      var tanX = Math.tan(x);
      var tanY = Math.tan(y);
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d;
      this.a += tanY * c;
      this.b += tanY * d;
      this.c += tanX * a;
      this.d += tanX * b;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(m1) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      var a1 = m1.a;
      var b1 = m1.b;
      var c1 = m1.c;
      var d1 = m1.d;
      var e1 = m1.e;
      var f1 = m1.f;
      this.a = a * a1 + c * b1;
      this.b = b * a1 + d * b1;
      this.c = a * c1 + c * d1;
      this.d = b * c1 + d * d1;
      this.e = a * e1 + c * f1 + e;
      this.f = b * e1 + d * f1 + f;
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.e = 0;
      this.f = 0;
    }
  }]);

  return Matrix;
}();

exports.default = Matrix;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./index");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function Render(ctx, container) {
  _classCallCheck(this, Render);

  window.requestAnimationFrame(loop);

  function loop() {
    ctx.save();
    ctx.clearRect(0, 0, container.width, container.height);

    _index.stage.render(ctx);

    ctx.restore();
    window.requestAnimationFrame(loop);
  }
};

exports.default = Render;

},{"./index":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _matrix = _interopRequireDefault(require("./matrix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite() {
    _classCallCheck(this, Sprite);

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.alpha = 1;
    this.rotate = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.transform = new _matrix.default();
    this.children = [];
    this.parent = null;
  }

  _createClass(Sprite, [{
    key: "addChild",
    value: function addChild(sprite) {
      if (sprite.parent === this) {
        this.removeChild(sprite);
        this.children.push(sprite);
      } else {
        sprite.removeSelf();
        this.children.push(sprite);
        sprite.parent = this;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(sprite) {
      var index = this.children.findIndex(sprite);

      if (index > -1) {
        this.children.splice(index, 1);
        sprite.parent = null;
      }
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      if (this.parent) {
        this.parent.removeChild(this);
      }
    }
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      var _iterator = _createForOfIteratorHelper(this.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          child.parent = null;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.children = [];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {}
  }, {
    key: "render",
    value: function render(ctx) {
      // 变形处理
      this.transform.reset();
      this.transform.rotate(this.rotate * Math.PI / 180);
      this.transform.scale(this.scaleX, this.scaleY);
      this.transform.skew(this.skewX, this.skewY);
      this.transform.translate(this.x, this.y);
      var alpha = this.alpha;

      if (this.parent != null) {
        alpha *= this.parent.alpha;
        this.transform.mul(this.parent.transform);
      }

      ctx.globalAlpha = alpha;
      var _this$transform = this.transform,
          a = _this$transform.a,
          b = _this$transform.b,
          c = _this$transform.c,
          d = _this$transform.d,
          e = _this$transform.e,
          f = _this$transform.f;
      ctx.setTransform(a, b, c, d, e, f);

      if (this.draw) {
        this.draw(ctx);
      }

      var _iterator2 = _createForOfIteratorHelper(this.children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          child.render(ctx);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

},{"./matrix":4}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sprite = _interopRequireDefault(require("./sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Text = /*#__PURE__*/function (_Sprite) {
  _inherits(Text, _Sprite);

  var _super = _createSuper(Text);

  function Text() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'value';

    _classCallCheck(this, Text);

    _this = _super.call(this);
    _this.fontSize = 20;
    _this.fontfamily = 'Arial';
    _this.fontweight = 'normal';
    _this.color = '#000000';
    _this.baseline = 'top';
    _this.align = 'left';
    _this.lineHeight = undefined;
    _this._lines = [];
    _this._text = value;

    _this._checkMultiline();

    return _this;
  }

  _createClass(Text, [{
    key: "_checkMultiline",
    value: function _checkMultiline() {
      this._lines = this._text.split('\n');
      this._multiline = this._lines.length > 0;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.font = "".concat(this.fontweight, " ").concat(this.fontSize, "pt ").concat(this.fontfamily);
      ctx.textBaseline = this.baseline;
      ctx.textAlign = this.align;
      ctx.fillStyle = this.color;

      if (this._multiline) {
        for (var i = 0, l = this._lines.length; i < l; i++) {
          var lineHeight = this.lineHeight ? this.lineHeight : this.fontSize * 1.5;
          ctx.fillText(this._lines[i], this.x, this.y + i * lineHeight);
        }
      } else {
        ctx.fillText(this._text, this.x, this.y);
      }
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      if (value !== this._text) {
        this._text = value;

        this._checkMultiline();
      }
    }
  }]);

  return Text;
}(_sprite.default);

exports.default = Text;

},{"./sprite":6}]},{},[3])(3)
});
