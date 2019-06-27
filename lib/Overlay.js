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
var react_dom_1 = __importDefault(require("react-dom"));
var styled_components_1 = __importStar(require("styled-components"));
var Column_1 = __importDefault(require("./Column"));
var defaultColor = 'rgba(255, 255, 255, 0.7)';
var overlayRootEl = document.createElement('div');
overlayRootEl.style.position = 'absolute';
overlayRootEl.style.left = '0';
overlayRootEl.style.top = '0';
overlayRootEl.style.zIndex = '1000';
document.body.appendChild(overlayRootEl);
function Overlay(props) {
    var fixed = props.fixed, color = props.color, rest = __rest(props, ["fixed", "color"]);
    if (fixed) {
        return react_dom_1.default.createPortal(react_1.default.createElement(Column_1.default, __assign({}, rest, { "data-overlay": true })), overlayRootEl);
    }
    else {
        return react_1.default.createElement(Column_1.default, __assign({}, rest, { "data-overlay": true }));
    }
}
exports.Overlay = Overlay;
function isOverlay(target) {
    return target && target.dataset && target.dataset.overlay;
}
exports.isOverlay = isOverlay;
exports.default = styled_components_1.default(Overlay)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  ", "\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  ",
    "\n"])), function (props) {
    var backgroundColor = props.color || defaultColor;
    return props.fixed
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          width: 100vw;\n          height: 100vh;\n          background-color: ", ";\n        "], ["\n          width: 100vw;\n          height: 100vh;\n          background-color: ", ";\n        "])), backgroundColor) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          width: 100%;\n          height: 100%;\n          background-color: ", ";\n        "], ["\n          width: 100%;\n          height: 100%;\n          background-color: ", ";\n        "])), backgroundColor);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Overlay.js.map