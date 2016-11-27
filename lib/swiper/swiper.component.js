"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require("react");
var typings = require("./swiper.type");
var Swiper = require("react-slick");
require("./swiper.css");
require("./react-slick.css");
require("./react-slick-theme.css");

var SwiperComponent = function (_React$Component) {
    (0, _inherits3.default)(SwiperComponent, _React$Component);

    function SwiperComponent() {
        (0, _classCallCheck3.default)(this, SwiperComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SwiperComponent.__proto__ || Object.getPrototypeOf(SwiperComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(SwiperComponent, [{
        key: "render",
        value: function render() {
            var SliderSettings = {
                dots: this.props.dots,
                speed: this.props.speed,
                autoplay: this.props.autoPlay,
                arrows: false,
                autoplaySpeed: this.props.autoPlaySpeed,
                style: this.props.style
            };
            if (React.Children.count(this.props.children) > 0) {
                var childs = React.Children.map(this.props.children, function (child, index) {
                    return React.createElement("div", { key: index }, child);
                });
                return React.createElement("div", { style: this.props.style, className: "nt-editor-gaea-web-components-swiper" }, React.createElement(Swiper, __assign({}, SliderSettings), childs));
            } else {
                return React.createElement("div", { style: this.props.style, className: "nt-editor-gaea-web-components-swiper" }, this.props.children);
            }
        }
    }]);
    return SwiperComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SwiperComponent;
SwiperComponent.defaultProps = new typings.Props();