"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Overlay_1 = __importDefault(require("../../src/Overlay"));
describe('Overlay', function () {
    test('Should match snapshot', function () {
        var container = react_2.render(react_1.default.createElement(Overlay_1.default, null)).container;
        expect(container.firstChild).toMatchSnapshot();
    });
});
//# sourceMappingURL=Overlay.test.js.map