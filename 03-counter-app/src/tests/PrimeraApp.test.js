import React from "react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => {
    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })
})