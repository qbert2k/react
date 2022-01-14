import React from "react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme';

describe('Pruebas en <PrimeraApp/>', () => {
    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />);

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    });
})