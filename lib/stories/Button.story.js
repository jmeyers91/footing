"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Button_1 = __importDefault(require("../Button"));
react_2.storiesOf('Button', module)
    .add('with text', function () { return react_1.default.createElement(Button_1.default, null, "Click me"); })
    .add('empty', function () { return react_1.default.createElement(Button_1.default, null); })
    .add('disabled', function () { return react_1.default.createElement(Button_1.default, { disabled: true }, "Disabled"); });
//# sourceMappingURL=Button.story.js.map