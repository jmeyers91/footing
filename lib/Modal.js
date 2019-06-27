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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Overlay_1 = __importStar(require("./Overlay"));
var Column_1 = __importDefault(require("./Column"));
function Modal(props) {
    var onOverlayClick = props.onOverlayClick, _a = props.fixed, fixed = _a === void 0 ? true : _a, rest = __rest(props, ["onOverlayClick", "fixed"]);
    function handleOverlayClick(event) {
        if (onOverlayClick && Overlay_1.isOverlay(event.target)) {
            onOverlayClick(event);
        }
    }
    return (react_1.default.createElement(StyledOverlay, { fixed: fixed, onClick: handleOverlayClick },
        react_1.default.createElement(Window, __assign({}, rest))));
}
exports.default = styled_components_1.default(Modal)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledOverlay = styled_components_1.default(Overlay_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:before {\n    content: '';\n    flex-shrink: 0;\n    height: 10vh;\n  }\n\n  &:after {\n    content: '';\n    flex-shrink: 0;\n    height: 10vh;\n  }\n"], ["\n  &:before {\n    content: '';\n    flex-shrink: 0;\n    height: 10vh;\n  }\n\n  &:after {\n    content: '';\n    flex-shrink: 0;\n    height: 10vh;\n  }\n"])));
var Window = styled_components_1.default(Column_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: center;\n  background-color: white;\n  max-width: 90%;\n  min-height: 50px;\n  min-width: 300px;\n"], ["\n  align-self: center;\n  background-color: white;\n  max-width: 90%;\n  min-height: 50px;\n  min-width: 300px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Modal.js.map