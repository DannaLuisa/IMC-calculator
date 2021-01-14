import { genero } from './genero';

describe('Unit test genero ', () => {
    it('recibe genero 1 = femenino', () => {
        let resultado = '';

        resultado = genero(1);

        expect(resultado).toBe('femenino');
    });

    it('recibe genero 0 = masculino', () => {
        let resultado = '';

        resultado = genero(0);

        expect(resultado).toBe('masculino');        

    });
    
});