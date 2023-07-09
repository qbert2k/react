import {renderHook} from '@testing-library/react';
import {useCounter} from '../../src/hooks/index.js';

describe('Test useCounter', () => {

    test('Must return default values', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Must generate a counter with a value of 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(100);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
})