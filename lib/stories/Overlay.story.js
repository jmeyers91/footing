"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Overlay_1 = __importDefault(require("../Overlay"));
react_2.storiesOf('Overlay', module)
    .add('Default - Fills container', function () { return (react_1.default.createElement("div", { style: {
        position: 'relative',
        width: 500,
        height: 500,
        background: 'pink'
    } },
    react_1.default.createElement(Overlay_1.default, { color: "rgba(0,0,255,0.8)" },
        react_1.default.createElement("div", { style: { background: 'red', height: 100, width: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100, width: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100, width: 100 } })))); })
    .add('Fixed - Fills body', function () { return (react_1.default.createElement("div", { style: {
        position: 'relative',
        width: 500,
        height: 500,
        background: 'pink'
    } },
    react_1.default.createElement(Overlay_1.default, { fixed: true, color: "rgba(0,0,255,0.8)" },
        react_1.default.createElement("div", { style: { background: 'red', height: 100, width: 100 } }),
        react_1.default.createElement("div", { style: { background: 'green', height: 100, width: 100 } }),
        react_1.default.createElement("div", { style: { background: 'blue', height: 100, width: 100 } })))); });
//# sourceMappingURL=Overlay.story.js.map