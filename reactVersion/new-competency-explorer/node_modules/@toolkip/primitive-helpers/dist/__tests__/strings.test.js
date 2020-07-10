"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('primitiveHelpers -> strings', () => {
    it('joins strings appropriately', () => {
        let out = __1.join('::', 'A', 'B', 'ZED');
        expect(out).toEqual("A::B::ZED");
    });
});
