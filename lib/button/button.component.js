"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var typings = require("./button.type");
var index_1 = require("../../../web-common/button/index");

var LayoutComponent = function (_React$Component) {
    _inherits(LayoutComponent, _React$Component);

    function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);

        var _this = _possibleConstructorReturn(this, (LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).apply(this, arguments));

        _this.state = new typings.State();
        return _this;
    }

    _createClass(LayoutComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(index_1.Button, { style: this.props.style }, this.props.text);
        }
    }]);

    return LayoutComponent;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LayoutComponent;
LayoutComponent.defaultProps = new typings.Props();