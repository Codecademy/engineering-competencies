"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('styleHelpers --> flattener', () => {
    it("flattens a set of css styles", () => {
        let unflattened = {
            ".a": {
                fontSize: "10em",
                nested: {
                    ".b": {
                        nested: {
                            ".c": {
                                fontFamily: "Arial"
                            },
                            ".mobile &": {
                                width: "10rem"
                            }
                        }
                    }
                }
            }
        };
        let expected = {
            ".a": {
                fontSize: "10em"
            },
            ".a .b .c": {
                fontFamily: "Arial"
            },
            ".mobile .a .b": {
                width: "10rem"
            }
        };
        let flattened = __1.flattenStyles(unflattened);
        expect(flattened).toMatchObject(expected);
    });
    it("handles already-flat styles", () => {
        let preFlattened = {
            "a": {
                color: "#FFF"
            },
            "a:hover": {
                textDecoration: "underline"
            }
        };
        let flattened = __1.flattenStyles(preFlattened);
        expect(flattened).toMatchObject(preFlattened);
    });
});
