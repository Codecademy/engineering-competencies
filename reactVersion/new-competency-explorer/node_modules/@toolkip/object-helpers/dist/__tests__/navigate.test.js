"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('objectHelpers -> navigate', () => {
    it('successfully initializes a dict with a nested key', () => {
        let dict = {};
        let expected = {
            a: {
                b: {
                    c: 100
                }
            }
        };
        __1.setDictValue(dict, 100, ["a", "b", "c"]);
        expect(dict).toMatchObject(expected);
    });
});
