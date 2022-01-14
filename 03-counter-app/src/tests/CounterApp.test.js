import React from "react";
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';

describe('Pruebas en <CounterApp/>', () => {

    // Debe mostrar <CounterApp/> correctamente (hacer match con un snapshot) y sus valores por defecto
    test('Debe mostrar <CounterApp/> correctamente', () => {
        const wrapper = shallow(<CounterApp/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(
            <CounterApp value={100}/>
        );

        const counterText = wrapper.find('h2').text().trim();
        console.log(`xxx${counterText}xxx`);

        expect(counterText).toBe('100');
    });
});