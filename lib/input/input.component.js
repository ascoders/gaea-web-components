"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var typings = require("./input.type");
var index_1 = require("../../../web-common/input/index");

var InputComponent = function (_React$Component) {
    _inherits(InputComponent, _React$Component);

    function InputComponent() {
        _classCallCheck(this, InputComponent);

        var _this = _possibleConstructorReturn(this, (InputComponent.__proto__ || Object.getPrototypeOf(InputComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(InputComponent, [{
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