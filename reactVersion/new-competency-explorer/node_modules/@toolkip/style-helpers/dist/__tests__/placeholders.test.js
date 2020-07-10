"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const styles = {
    ".primary": {
        color: "#FFF",
        backgroundColor: "<hello>"
    },
    ".secondary": {
        color: "<hello>",
        backgroundColor: "<goodbye>",
        fontSize: "10em"
    },
    ".tertiary": {
        color: "#F00",
        fontFamily: "Arial"
    }
};
const secondaryStyles = {
    ".single": {
        font: "<hello>",
        width: "<goodbye>"
    }
};
const defaultPlaceholderStyles = {
    ".default": {
        backgroundColor: "<default:#444>"
    }
};
const index = {
    "hello": {
        "styles": {
            ".primary": {
                backgroundColor: true
            },
            ".secondary": {
                color: true
            }
        },
        "secondaryStyles": {
            ".single": {
                font: true
            }
        }
    },
    "goodbye": {
        "styles": {
            ".secondary": {
                backgroundColor: true
            }
        },
        "secondaryStyles": {
            ".single": {
                width: true
            }
        }
    }
};
describe('styleHelpers --> placeholders', () => {
    it('splits styles with placeholders from styles without', () => {
        let expected = {
            standard: {
                ".primary": {
                    color: "#FFF"
                },
                ".secondary": {
                    fontSize: "10em"
                },
                ".tertiary": {
                    color: "#F00",
                    fontFamily: "Arial"
                }
            },
            withPlaceholders: {
                ".primary": {
                    backgroundColor: "<hello>"
                },
                ".secondary": {
                    color: "<hello>",
                    backgroundColor: "<goodbye>",
                }
            }
        };
        let result = __1.splitStyles(styles);
        expect(result).toMatchObject(expected);
    });
    it('finds a placeholder appropriately', () => {
        let inputWithPlaceholder = "has <placeholder>!";
        let inputWithoutPlaceholder = "has no placeholder";
        const foundPlaceholder = __1.findContainedPlaceholder(inputWithPlaceholder);
        expect(foundPlaceholder.name).toEqual("placeholder");
        expect(__1.findContainedPlaceholder(inputWithoutPlaceholder)).toBeFalsy();
    });
    it('indexes by placeholder and key', () => {
        let idx = __1.indexByPlaceholder({ styles, secondaryStyles });
        expect(idx).toMatchObject(index);
    });
    it('maps an index to real styles', () => {
        let merged = __1.combineStyles(styles, secondaryStyles);
        let map = __1.mapIndexToStyle(index["hello"]["secondaryStyles"], merged);
        expect(map).toMatchObject({
            ".single": {
                font: "<hello>"
            }
        });
    });
    it("replaces default placeholders", () => {
        let replaced = __1.replacePlaceholders(defaultPlaceholderStyles, "default", "#FFF");
        const expected = {
            ".default": {
                backgroundColor: "#FFF"
            }
        };
        expect(replaced).toMatchObject(expected);
    });
    it('replaces placeholders', () => {
        let expected = {
            ".primary": {
                color: "#FFF",
                backgroundColor: "kip"
            },
            ".secondary": {
                color: "kip",
                backgroundColor: "<goodbye>",
                fontSize: "10em"
            },
            ".tertiary": {
                color: "#F00",
                fontFamily: "Arial"
            }
        };
        let replacedVersion = __1.replacePlaceholders(styles, "hello", "kip");
        expect(replacedVersion).toMatchObject(expected);
    });
});
