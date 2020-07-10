"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe("styleHelpers --> combiner.ts", () => {
    it("combines standard styles appropriately", () => {
        let styleA = {
            ".primary": {
                color: "#FFF"
            },
            ".secondary": {
                fontFamily: "Arial"
            }
        };
        let styleB = {
            ".primary": {
                backgroundColor: "#333"
            },
            ".secondary": {
                fontFamily: "Calibri"
            },
            ".tertiary": {
                padding: "10px"
            }
        };
        let combo = __1.combineStyles(styleA, styleB);
        let expected = {
            ".primary": {
                color: "#FFF",
                backgroundColor: "#333"
            },
            ".secondary": {
                fontFamily: "Calibri"
            },
            ".tertiary": {
                padding: "10px"
            }
        };
        expect(combo).toMatchObject(expected);
    });
    it("combines fonts appropriately", () => {
        let fontsA = {
            "customA": [{ url: "test", format: "any" }],
            "customB": [{ url: "one", format: "any" }, { url: "two", format: "any" }]
        };
        let fontsB = {
            "customA": [{ url: "second", format: "any" }],
            "customC": [{ url: "url", format: "any" }]
        };
        let combo = __1.combineStyles(fontsA, fontsB);
        let expected = {
            "customA": [{ url: "test", format: "any" }, { url: "second", format: "any" }],
            "customB": [{ url: "one", format: "any" }, { url: "two", format: "any" }],
            "customC": [{ url: "url", format: "any" }]
        };
        expect(combo).toMatchObject(expected);
    });
});
