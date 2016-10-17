"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var index_1 = require("../../gaea-helper/index");

var PropsGaea = function PropsGaea() {
    _classCallCheck(this, PropsGaea);

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
    _inherits(Props, _PropsGaea);

    function Props() {
        _classCallCheck(this, Props);

        var _this = _possibleConstructorReturn(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));

        _this.style = _extends({}, index_1.gaeaHelper.layout, index_1.gaeaHelper.marginPadding, index_1.gaeaHelper.opacity, index_1.gaeaHelper.widthHeight, index_1.gaeaHelper.font, {
            display: 'inline-block'
        });
        _this.text = '文字';
        return _this;
    }

    return Props;
}(PropsGaea);

exports.Props = Props;

var State = function State() {
    _classCallCheck(this, State);
};

exports.State = State;