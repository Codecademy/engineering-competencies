"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('testing async wait', () => {
    it('tests standard settimeout', () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let start = +(new Date());
            window.setTimeout(() => {
                let end = +(new Date());
                expect(end - start).toBeGreaterThanOrEqual(1000);
                resolve();
            }, 1000);
        });
    }));
    it('waits one second', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        let startTime = +(new Date());
        yield __1.wait(1000);
        let endTime = +(new Date());
        expect(endTime - startTime).toBeGreaterThanOrEqual(1000);
    }));
    it('chains to hit three seconds', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(4);
        let globalStartTime = +(new Date());
        let globalEndTime;
        ;
        for (let i = 0; i < 3; i += 1) {
            let startTime = +(new Date());
            yield __1.wait(1000);
            let endTime = +(new Date());
            globalEndTime = endTime;
            let diff = endTime - startTime;
            expect(diff).toBeGreaterThanOrEqual(1000);
        }
        let diff = (globalEndTime - globalStartTime);
        expect(diff).toBeGreaterThanOrEqual(3000);
    }));
});
