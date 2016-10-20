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
var typings = require("./input.type");
var index_1 = require('nt-web-input');

var InputComponent = function (_React$Component) {
    (0, _inherits3.default)(InputComponent, _React$Component);

    function InputComponent() {
        (0, _classCallCheck3.default)(this, InputComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(InputComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(index_1.Input, { label: this.props.label, placeholder: this.props.placeholder, defaultValue: this.props.defaultValue, style: this.props.style });
        }
    }]);
    return InputComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InputComponent;
InputComponent.defaultProps = new typings.Props();