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

var React = require("react");
var typings = require("./layout.type");

var LayoutComponent = function (_React$Component) {
    (0, _inherits3.default)(LayoutComponent, _React$Component);

    function LayoutComponent() {
        (0, _classCallCheck3.default)(this, LayoutComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(LayoutComponent, [{
        key: "render",
        value: function render() {
            return React.createElement("div", { onClick: this.props.onClick, style: this.props.style }, this.props.children);
        }
    }]);
    return LayoutComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutComponent;
LayoutComponent.defaultProps = new typings.Props();