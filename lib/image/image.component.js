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
var typings = require("./image.type");

var ImageComponent = function (_React$Component) {
    (0, _inherits3.default)(ImageComponent, _React$Component);

    function ImageComponent() {
        (0, _classCallCheck3.default)(this, ImageComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(ImageComponent, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { style: this.props.style, src: this.props.source });
        }
    }]);
    return ImageComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageComponent;
ImageComponent.defaultProps = new typings.Props();