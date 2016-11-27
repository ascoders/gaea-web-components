"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index_1 = require('gaea-helper');
var Layout = require("../layout/layout.type");

var PropsGaea = function (_Layout$PropsGaea) {
    (0, _inherits3.default)(PropsGaea, _Layout$PropsGaea);

    function PropsGaea() {
        (0, _classCallCheck3.default)(this, PropsGaea);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PropsGaea.__proto__ || Object.getPrototypeOf(PropsGaea)).apply(this, arguments));

        _this.gaeaName = '布局-绝对定位';
        _this.gaeaIcon = 'square-o';
        _this.gaeaUniqueKey = 'gaea-layout-absolute';
        return _this;
    }

    return PropsGaea;
}(Layout.PropsGaea);

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this2.style = (0, _extends3.default)({}, index_1.gaeaHelper.layout, index_1.gaeaHelper.marginPadding, index_1.gaeaHelper.opacity, index_1.gaeaHelper.widthHeight, index_1.gaeaHelper.overflow, index_1.gaeaHelper.background, index_1.gaeaHelper.border, index_1.gaeaHelper.position, {
            backgroundColor: 'transparent',
            position: 'absolute',
            width: 150,
            height: 150,
            zIndex: 1
        });
        _this2.onClick = function () {};
        return _this2;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);
};

exports.State = State;