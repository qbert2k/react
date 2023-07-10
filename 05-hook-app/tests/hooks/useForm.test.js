import {act, renderHook} from '@testing-library/react';
import {useForm} from '../../src/hooks/index.js';

describe('Test useForm', () => {

    const initialForm = {
        name: 'Javier',
        email: 'javier.rojas.blum@gmail.com'
    }

    test('Should return default values', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Should change the form name', () => {
        const newValue = 'Milena';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Should reset the form', () => {
        const newValue = 'Milena';
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});