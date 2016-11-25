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

    this.gaeaName = '布局';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'gaea-layout';
    this.canDragIn = true;
    this.gaeaEdit = ['布局', index_1.gaeaHelper.layoutEditor, index_1.gaeaHelper.marginPaddingEditor, index_1.gaeaHelper.widthHeightEditor, index_1.gaeaHelper.overflowEditor, '定位', index_1.gaeaHelper.positionEditor, '背景', index_1.gaeaHelper.backgroundEditor, '边框', index_1.gaeaHelper.borderEditor, '特效', index_1.gaeaHelper.opacityEditor];
    this.gaeaEvent = {
        types: [{
            name: '点击',
            type: 'onClick',
            selfCallback: true
        }],
        events: [{
            name: '跳转网址',
            event: 'jumpUrl'
        }, {
            name: '回退',
            event: 'call',
            call: {
                functionName: 'back'
            }
        }]
    };
};

exports.PropsGaea = PropsGaea;

var Props = function (_PropsGaea) {
    (0, _inherits3.default)(Props, _PropsGaea);

    function Props() {
        (0, _classCallCheck3.default)(this, Props);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.style = (0, _extends3.default)({}, index_1.gaeaHelper.layout, index_1.gaeaHelper.marginPadding, index_1.gaeaHelper.opacity, index_1.gaeaHelper.widthHeight, index_1.gaeaHelper.overflow, index_1.gaeaHelper.background, index_1.gaeaHelper.border, index_1.gaeaHelper.position, {
            display: 'flex',
            backgroundColor: 'transparent'
        });
        _this.onClick = function () {};
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);
};

exports.State = State;