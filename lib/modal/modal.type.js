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

    this.gaeaName = '模态框';
    this.gaeaIcon = 'square-o';
    this.gaeaUniqueKey = 'gaea-modal';
    this.canDragIn = true;
    this.gaeaEdit = ['模态框', {
        field: 'show',
        label: '是否显示',
        editor: 'switch'
    }, '特效', index_1.gaeaHelper.opacityEditor];
    this.gaeaEvent = {
        triggers: [{
            name: '点击确认',
            type: 'onOk',
            selfCallback: true
        }],
        effects: [{
            name: '跳转网址',
            type: 'jumpUrl'
        }, {
            name: '回退',
            type: 'call',
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

        _this.style = (0, _extends3.default)({}, index_1.gaeaHelper.opacity);
        _this.show = true;
        _this.onOk = function () {};
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    (0, _classCallCheck3.default)(this, State);

    this.show = false;
};

exports.State = State;