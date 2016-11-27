"use strict";

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index_1 = require('gaea-helper');

var PropsGaea = function PropsGaea() {
    (0, _classCallCheck3.default)(this, PropsGaea);

    this.gaeaName = '文字';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'gaea-text';
    this.gaeaEdit = ['文字', {
        field: 'text',
        label: '内容',
        editor: 'text',
        editable: true
    }, '排版', index_1.gaeaHelper.fontEditor, '布局', index_1.gaeaHelper.layoutEditor, index_1.gaeaHelper.marginPaddingEditor, index_1.gaeaHelper.widthHeightEditor, '特效', index_1.gaeaHelper.opacityEditor];
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.style = (0, _extends3.default)({}, index_1.gaeaHelper.layout, index_1.gaeaHelper.marginPadding, index_1.gaeaHelper.opacity, index_1.gaeaHelper.widthHeight, index_1.gaeaHelper.font, {
            display: 'inline-block'
        });
        _this.text = '文字';
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);
};

exports.State = State;