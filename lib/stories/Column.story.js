"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Column_1 = __importDefault(require("../Column"));
react_2.storiesOf('Column', module).add('Default', function () { return (react_1.default.createElement(Column_1.default, { style: { height: 300, width: 500 } },
    react_1.default.createElement("div", { style: { background: 'red', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'green', flex: 2 } }),
    react_1.default.createElement("div", { style: { background: 'blue', flex: 2 } }))); });
//# sourceMappingURL=Column.story.js.map