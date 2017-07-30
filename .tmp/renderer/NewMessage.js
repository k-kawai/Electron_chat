"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewMessage = function (_React$Component) {
    _inherits(NewMessage, _React$Component);

    function NewMessage(props) {
        _classCallCheck(this, NewMessage);

        var _this = _possibleConstructorReturn(this, (NewMessage.__proto__ || Object.getPrototypeOf(NewMessage)).call(this, props));

        _this.state = {
            message: ""
        };
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
        return _this;
    }

    _createClass(NewMessage, [{
        key: "handleOnChange",
        value: function handleOnChange(e) {
            this.setState({ message: e.target.value });
        }
    }, {
        key: "handleOnSubmit",
        value: function handleOnSubmit(e) {
            var onMessagePost = this.props.onMessagePost;

            if (!onMessagePost || !this.state.message.length) {
                return;
            }
            onMessagePost(this.state.message);
            this.setState({ message: "" });
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                { style: FROM_STYLE, onSubmit: this.handleOnSubmit },
                _react2.default.createElement("input", {
                    type: "text",
                    className: "form-control",
                    onChange: this.handleOnChange,
                    value: this.state.message
                }),
                _react2.default.createElement(
                    "button",
                    { className: "btn btn-primary", style: BUTTON_STYLE },
                    "POST"
                )
            );
        }
    }]);

    return NewMessage;
}(_react2.default.Component);

exports.default = NewMessage;


var FROM_STYLE = {
    display: "flex"
};
var BUTTON_STYLE = {
    marginLeft: 10
};