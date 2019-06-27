"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Column_1 = __importDefault(require("./Column"));
var Page = styled_components_1.default(Column_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n"])));
exports.default = Page;
var templateObject_1;
//# sourceMappingURL=Page.js.map