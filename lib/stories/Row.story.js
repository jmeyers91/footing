"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Row_1 = __importDefault(require("../Row"));
react_2.storiesOf('Row', module).add('Default', function () { return (react_1.default.createElement(Row_1.default, { style: { height: 300, width: 500 } },
    react_1.default.createElement("div", { style: { background: 'red', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'green', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'blue', flex: 1 } }))); });
//# sourceMappingURL=Row.story.js.map