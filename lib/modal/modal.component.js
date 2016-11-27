"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
var typings = require("./modal.type");
var index_1 = require('nt-web-modal');
require("./modal.css");

var SModalComponent = function (_React$Component) {
    (0, _inherits3.default)(SModalComponent, _React$Component);

    function SModalComponent() {
        (0, _classCallCheck3.default)(this, SModalComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SModalComponent.__proto__ || Object.getPrototypeOf(SModalComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    (0, _createClass3.default)(SModalComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                show: this.props.show
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                show: nextProps.show
            });
        }
    }, {
        key: "handleOk",
        value: function handleOk() {
            this.setState({
                show: false
            });
            this.props.onOk();
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            this.setState({
                show: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.gaeaPreview) {
                return React.createElement(index_1.default, { show: this.state.show, onOk: this.handleOk.bind(this), onCancel: this.handleCancel.bind(this), style: (0, _extends3.default)({}, this.props.style) }, this.props.children);
            } else {
                return React.createElement("div", { style: (0, _extends3.default)({}, this.props.style) }, this.props.children);
            }
        }
    }]);
    return SModalComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SModalComponent;
SModalComponent.defaultProps = new typings.Props();