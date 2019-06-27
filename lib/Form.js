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
var styled_components_1 = __importDefault(require("styled-components"));
function Form(props) {
    var onSubmit = props.onSubmit;
    var handleSubmit = react_1.useCallback(function (event) {
        event.preventDefault();
        var onSubmit = props.onSubmit;
        if (onSubmit) {
            onSubmit(event);
        }
    }, [onSubmit]);
    return react_1.default.createElement("form", __assign({}, props, { onSubmit: handleSubmit }));
}
exports.Form = Form;
/**
 * Form element that calls `preventDefault` on submit events automatically.
 * @param props
 */
exports.default = styled_components_1.default(Form)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  position: relative;\n  box-sizing: border-box;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  position: relative;\n  box-sizing: border-box;\n"])));
var templateObject_1;
//# sourceMappingURL=Form.js.map