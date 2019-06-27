"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Form_1 = __importDefault(require("../Form"));
react_2.storiesOf('Form', module).add('Submit handler', function () { return (react_1.default.createElement(Form_1.default, { style: { width: 200, height: 100 }, onSubmit: function () { return alert('Submit!'); } },
    react_1.default.createElement("div", { style: { background: 'red', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'green', flex: 1 } }),
    react_1.default.createElement("div", { style: { background: 'blue', flex: 1 } }),
    react_1.default.createElement("button", null, "Submit"))); });
//# sourceMappingURL=Form.story.js.map