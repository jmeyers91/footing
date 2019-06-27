"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Modal_1 = __importDefault(require("../Modal"));
react_2.storiesOf('Modal', module)
    .add('Default', function () { return (react_1.default.createElement("div", { style: { background: '#000', width: 100, height: 100, color: 'white' } },
    "Container",
    react_1.default.createElement(Modal_1.default, { style: { width: 500, height: 100 } },
        react_1.default.createElement("div", { style: { background: 'red', flex: 1 } }, "Modals are columns"),
        react_1.default.createElement("div", { style: { background: 'green', flex: 1 } }),
        react_1.default.createElement("div", { style: { background: 'blue', flex: 1 } })))); })
    .add('Overflow', function () { return (react_1.default.createElement("div", { style: { background: '#000', width: 100, height: 100, color: 'white' } },
    "Container",
    react_1.default.createElement(Modal_1.default, { style: { width: 500 } },
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'red', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100 } })))); });
//# sourceMappingURL=Modal.story.js.map