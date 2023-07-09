import {renderHook} from '@testing-library/react';
import {useCounter} from '../../src/hooks/index.js';
import {act} from 'react-dom/test-utils';

describe('Test useCounter', () => {

    test('Should return default values', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Should generate a counter with a value of 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
    });

    test('Should increment the counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, increment} = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test('Should decrement the counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement} = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);
    });

    test('Should reset the counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, reset} = result.current;

        act(() => {
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
})