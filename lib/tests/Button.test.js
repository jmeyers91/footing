"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Button_1 = __importDefault(require("../../src/Button"));
describe('Button', function () {
    test('Should match snapshot', function () {
        var container = react_2.render(react_1.default.createElement(Button_1.default, null)).container;
        expect(container.firstChild).toMatchSnapshot();
    });
});
//# sourceMappingURL=Button.test.js.map