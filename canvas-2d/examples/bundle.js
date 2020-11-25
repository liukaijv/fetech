(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CS = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sprite = _interopRequireDefault(require("./sprite"));

var _rectangle = _interopRequireDefault(require("./rectangle"));

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
    _this.bounds = new _rectangle.default();
    _this.frame = new _rectangle.default();
    return _this;
  }

  _createClass(Image, [{
    key: "draw",
    value: function draw(ctx) {
      if (this._img) {
        ctx.drawImage(this._img, this.frame.x, this.frame.y, this.frame.w, this.frame.h, this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);
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
      this.bounds.w = img.width;
      this.bounds.h = img.height;
      this.frame.w = img.width;
      this.frame.h = img.height;
    }
  }]);

  return Image;
}(_sprite.default);

exports.default = Image;

},{"./rectangle":4,"./sprite":6}],2:[function(require,module,exports){
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

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  ctx.imageSmoothingEnabled = true;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  canvas.style.backgroundColor = bg;
  new _render.default(ctx, stage);
}

},{"./image":1,"./render":5,"./sprite":6,"./text":7}],3:[function(require,module,exports){
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
      var cos = Math.cos(deg);
      var sin = Math.sin(deg);
      var a1 = this.a;
      var c1 = this.c;
      var e1 = this.e;
      this.a = a1 * cos - this.b * sin;
      this.b = a1 * sin + this.b * cos;
      this.c = c1 * cos - this.d * sin;
      this.d = c1 * sin + this.d * cos;
      this.tx = e1 * cos - this.ty * sin;
      this.ty = e1 * sin + this.ty * cos;
      return this;
    }
  }, {
    key: "skew",
    value: function skew(x, y) {
      var tanX = Math.tan(x);
      var tanY = Math.tan(y);
      var a1 = this.a;
      var b1 = this.b;
      this.a += tanY * this.c;
      this.b += tanY * this.d;
      this.c += tanX * a1;
      this.d += tanX * b1;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(m2) {
      var aa = this.a,
          ab = this.b,
          ac = this.c,
          ad = this.d,
          ae = this.e,
          af = this.f;
      var ba = m2.a,
          bb = m2.b,
          bc = m2.c,
          bd = m2.d,
          be = m2.e,
          bf = m2.f;

      if (bb !== 0 || bc !== 0) {
        this.a = aa * ba + ab * bc;
        this.b = aa * bb + ab * bd;
        this.c = ac * ba + ad * bc;
        this.d = ac * bb + ad * bd;
        this.e = ba * ae + bc * af + be;
        this.f = bb * ae + bd * af + bf;
      } else {
        this.a = aa * ba;
        this.b = ab * bd;
        this.c = ac * ba;
        this.d = ad * bd;
        this.e = ba * ae + be;
        this.f = bd * af + bf;
      }
    }
  }]);

  return Matrix;
}();

exports.default = Matrix;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle = /*#__PURE__*/function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Rectangle);

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  _createClass(Rectangle, [{
    key: "right",
    value: function right() {
      return this.x + this.width;
    }
  }, {
    key: "bottom",
    value: function bottom() {
      return this.y + this.height;
    }
  }]);

  return Rectangle;
}();

exports.default = Rectangle;

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

},{"./index":2}],6:[function(require,module,exports){
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
      // this.transform.rotate(this.rotate);
      // this.transform.scale(this.scaleX, this.scaleY);
      // this.transform.skew(this.skewX, this.scaleY);
      // this.transform.translate(this.x, this.y);
      //
      // let alpha = this.alpha;
      // if (this.parent != null) {
      //     alpha *= this.parent.alpha;
      //     this.transform.mul(this.parent.transform);
      // }
      //
      // ctx.globalAlpha = alpha;
      // let {a, b, c, d, e, f} = this.transform;
      // ctx.setTransform(a, b, c, d, e, f);
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

},{"./matrix":3}],7:[function(require,module,exports){
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
    _this.lineSpace = undefined;
    _this._text = value;
    _this._lines = [];
    return _this;
  }

  _createClass(Text, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.font = "".concat(this.fontweight, " ").concat(this.fontSize, "pt ").concat(this.fontfamily);
      ctx.textBaseline = this.baseline;
      ctx.textAlign = this.align;
      ctx.fillStyle = this.color;

      if (this._multiline) {
        for (var i = 0, l = this._lines.length; i < l; i++) {
          var sp = this.lineSpace !== undefined ? this.lineSpace : this.size + 8;
          ctx.fillText(this._lines[i], 0, i * sp);
        }
      } else {
        ctx.fillText(this._text, 0, 0);
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
        this._lines = this._text.split('\n');
        this._multiline = this._lines.length > 0;
      }
    }
  }]);

  return Text;
}(_sprite.default);

exports.default = Text;

},{"./sprite":6}]},{},[2])(2)
});
