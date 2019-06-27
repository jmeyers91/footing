"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_2 = require("@storybook/react");
var Input_1 = __importDefault(require("../Input"));
function ControlledInput(props) {
    var initialValue = props.initialValue, rest = __rest(props, ["initialValue"]);
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    return (react_1.default.createElement(Input_1.default, __assign({}, rest, { value: value, onChange: function (event) { return setValue(event.currentTarget.value); } })));
}
react_2.storiesOf('Input', module)
    .add('Empty', function () {
    return react_1.default.createElement(ControlledInput, null);
})
    .add('Placeholder', function () {
    return react_1.default.createElement(ControlledInput, { placeholder: "Type here" });
})
    .add('Filled', function () {
    return react_1.default.createElement(ControlledInput, { initialValue: "Hello World" });
})
    .add('With children', function () { return (react_1.default.createElement(ControlledInput, null,
    react_1.default.createElement("div", { style: { width: 50, background: 'red' } }))); });
//# sourceMappingURL=Input.story.js.map