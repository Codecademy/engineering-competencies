"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleEvent_1 = require("./classes/simpleEvent");
describe('codeEvent', () => {
    it('raises an event', () => {
        let val = 0;
        simpleEvent_1.SimpleEvent.addEventListener((event) => {
            val += event.data;
        });
        simpleEvent_1.SimpleEvent.dispatch(undefined, { data: 1 });
        expect(val).toBeTruthy();
    });
    it('notifies multiple listeners', () => {
        let listeners = [0, 0, 0];
        for (let i = 0; i < listeners.length; i += 1) {
            simpleEvent_1.SimpleEvent.addEventListener((event) => {
                listeners[i] += event.data;
            });
        }
        simpleEvent_1.SimpleEvent.dispatch(null, { data: 1 });
        for (let v of listeners) {
            expect(v).toBeTruthy();
        }
    });
    it('respects a set target', () => {
        const targetA = { name: "a" };
        const targetB = { name: "b" };
        let listenerA = 0;
        simpleEvent_1.SimpleEvent.addEventListener((event) => {
            listenerA += event.data;
        }, targetA);
        let listenerB = 0;
        simpleEvent_1.SimpleEvent.addEventListener((event) => {
            listenerB += event.data;
        }, targetB);
        let listenerC = 0;
        simpleEvent_1.SimpleEvent.addEventListener((event) => {
            listenerC += event.data;
        });
        simpleEvent_1.SimpleEvent.dispatch(targetA, { data: 1 });
        expect(listenerA).toBeTruthy();
        expect(listenerB).toBeFalsy();
        expect(listenerC).toBeTruthy();
        simpleEvent_1.SimpleEvent.dispatch(targetB, { data: 1 });
        expect(listenerA).toEqual(1);
        expect(listenerB).toBeTruthy();
        expect(listenerC).toEqual(2);
    });
});
