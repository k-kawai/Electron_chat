"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Avator;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Avator(props) {
    var photoURL = props.user.photoURL;

    if (photoURL) {
        // photoURLが設定されている場合、img要素を表示
        return _react2.default.createElement("img", { className: "img-rounded", src: photoURL, style: AVATOR_STYLE });
    } else {
        // photoURLが設定されていない場合、代替としてiconを表示
        return _react2.default.createElement(
            "div",
            { style: AVATOR_STYLE },
            _react2.default.createElement("span", { className: "icon icon-user" })
        );
    }
}

var AVATOR_STYLE = {
    width: 32,
    textAlign: "center",
    fontSize: 24
};