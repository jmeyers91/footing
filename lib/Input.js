"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Row_1 = __importDefault(require("./Row"));
function Input(props) {
    var ref = props.ref, value = props.value, onChange = props.onChange, checked = props.checked, placeholder = props.placeholder, autoCapitalize = props.autoCapitalize, autoComplete = props.autoComplete, autoFocus = props.autoFocus, autoSave = props.autoSave, children = props.children, rest = __rest(props, ["ref", "value", "onChange", "checked", "placeholder", "autoCapitalize", "autoComplete", "autoFocus", "autoSave", "children"]);
    return (react_1.default.createElement(Row_1.default, __assign({}, rest),
        react_1.default.createElement("input", { ref: ref, value: value, onChange: onChange, checked: checked, placeholder: placeholder, autoCapitalize: autoCapitalize, autoComplete: autoComplete, autoFocus: autoFocus, autoSave: autoSave }),
        children));
}
exports.default = styled_components_1.default(Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 2rem;\n\n  input {\n    width: 100%;\n    height: 100%;\n    font-size: 100%;\n    margin: 0 0 0 0;\n    padding: 0 1rem 0 1rem;\n    border: none;\n    outline: none;\n  }\n"], ["\n  height: 2rem;\n\n  input {\n    width: 100%;\n    height: 100%;\n    font-size: 100%;\n    margin: 0 0 0 0;\n    padding: 0 1rem 0 1rem;\n    border: none;\n    outline: none;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Input.js.map