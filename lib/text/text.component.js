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
var typings = require("./text.type");

var TextComponent = function (_React$Component) {
    (0, _inherits3.default)(TextComponent, _React$Component);

    function TextComponent() {
        (0, _classCallCheck3.default)(this, TextComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextComponent.__proto__ || Object.getPrototypeOf(TextComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(TextComponent, [{
        key: "render",
        value: function render() {
            return React.createElement("span", { style: this.props.style }, this.props.text);
        }
    }]);
    return TextComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextComponent;
TextComponent.defaultProps = new typings.Props();