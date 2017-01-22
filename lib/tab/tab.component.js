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
var typings = require("./tab.type");
require("./tab.css");

var TabComponent = function (_React$Component) {
    (0, _inherits3.default)(TabComponent, _React$Component);

    function TabComponent() {
        (0, _classCallCheck3.default)(this, TabComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabComponent.__proto__ || Object.getPrototypeOf(TabComponent)).apply(this, arguments));

        _this.state = new typings.State();
        _this.tabHandleClick = function (index) {
            _this.setState({
                activeTab: +index
            });
        };
        return _this;
    }

    (0, _createClass3.default)(TabComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.refs['contain'] && this.refs['contain'].addEventListener("click", function (e) {
                if (e.target && e.target.className && e.target.className.match(new RegExp('(\\s|^)' + 'tab-header-item' + '(\\s|$)'))) {
                    _this2.tabHandleClick(e.target.dataset.index);
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var tabHeader = [];
            var childs = void 0;
            if (React.Children.count(this.props.children) > 0) {
                var tabContents = React.Children.map(this.props.children, function (child, index) {
                    var activeTab = typeof _this3.state.activeTab !== 'undefined' ? _this3.state.activeTab : _this3.props.activeTab;
                    tabHeader.push(React.createElement("div", { className: 'tab-header-item ' + (index === activeTab ? 'active' : ''), key: "header" + index, "data-index": index }, React.createElement("span", null, "tab")));
                    return React.createElement("div", { key: index, className: 'tab-content-item ' + (index === activeTab ? 'active' : '') }, child);
                });
                childs = React.createElement("div", { className: 'tab' }, React.createElement("div", { className: 'tab-header' }, tabHeader), React.createElement("div", { className: 'tab-content' }, tabContents));
            } else {
                childs = React.createElement("div", { style: { height: '30px' } }, this.props.children);
            }
            return React.createElement("div", { style: this.props.style, className: "nt-editor-gaea-web-components-tab", ref: 'contain' }, childs);
        }
    }]);
    return TabComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabComponent;
TabComponent.defaultProps = new typings.Props();