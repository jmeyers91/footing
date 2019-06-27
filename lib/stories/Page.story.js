"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Page_1 = __importDefault(require("../Page"));
react_2.storiesOf('Page', module).add('Default', function () { return (react_1.default.createElement(Page_1.default, null,
    react_1.default.createElement("div", { style: { background: 'red', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'green', flex: 2 } }),
    react_1.default.createElement("div", { style: { background: 'blue', flex: 2 } }))); });
//# sourceMappingURL=Page.story.js.map