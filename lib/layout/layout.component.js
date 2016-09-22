"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require('react');
var typings = require('./layout.type');
var index_1 = require('nt-transmit-transparently');

var LayoutComponent = function (_React$Component) {
    _inherits(LayoutComponent, _React$Component);

    function LayoutComponent() {
        var _ref;

        _classCallCheck(this, LayoutComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args)));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(LayoutComponent, [{
        key: 'render',
        value: function render() {
            var style = {
                width: this.props.width,
                minWidth: this.props.minWidth,
                height: this.props.height,
                minHeight: this.props.minHeight,
                background: this.props.background,
                display: this.props.display,
                flexDirection: this.props.flexDirection,
                flexGrow: this.props.flexGrow,
                flexWrap: this.props.flexWrap,
                justifyContent: this.props.justifyContent,
                alignItems: this.props.alignItems,
                overflow: this.props.overflow,
                overflowX: this.props.overflowX,
                overflowY: this.props.overflowY,
                paddingLeft: this.props.paddingLeft,
                paddingTop: this.props.paddingTop,
                paddingRight: this.props.paddingRight,
                paddingBottom: this.props.paddingBottom,
                marginLeft: this.props.marginLeft,
                marginTop: this.props.marginTop,
                marginRight: this.props.marginRight,
                marginBottom: this.props.marginBottom
            };
            return React.createElement("div", __assign({}, index_1.others(new typings.Props(), this.props), { style: style }), this.props.children);
        }
    }]);

    return LayoutComponent;
}(React.Component);

LayoutComponent.defaultProps = new typings.Props();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutComponent;
//# sourceMappingURL=layout.component.js.map