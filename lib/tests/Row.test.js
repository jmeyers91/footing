"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Row_1 = __importDefault(require("../../src/Row"));
describe('Row', function () {
    test('Should match snapshot', function () {
        var container = react_2.render(react_1.default.createElement(Row_1.default, null)).container;
        expect(container.firstChild).toMatchSnapshot();
    });
});
//# sourceMappingURL=Row.test.js.map