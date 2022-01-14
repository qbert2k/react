import React from "react";
import CounterApp from "../CounterApp";
import {shallow} from 'enzyme';
import * as Console from "console";

describe('Pruebas en <CounterApp/>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    // Debe mostrar <CounterApp/> correctamente (hacer match con un snapshot) y sus valores por defecto
    test('Debe mostrar <CounterApp/> correctamente', () => {
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

    test('Debe de incrementar con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('Debe de decrementar con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('Debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(
            <CounterApp value={105}/>
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    });
});