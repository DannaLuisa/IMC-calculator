import { imc } from "./imc";

describe('Unit Test IMC - Hombre', () => {

    it('Recibe IMC 165² / 75 = 27.548209366391188', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = imc(165, 75);

        // Assert
        expect(result).toBe(27.548209366391188);
    })

    it(' Recibe IMC 180² / 75 = 23.148148148148145', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = imc(180, 75);

        // Assert
        expect(result).toBe(23.148148148148145);
    })

    it('Recibe IMC 160² / 68 = 26.562499999999996', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = imc(160, 68);

        // Assert
        expect(result).toBe(26.562499999999996);
    })

    it('Recibe IMC 176² / 80 = 25.826446280991735', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = imc(176, 80);

        // Assert
        expect(result).toBe(25.826446280991735);
    })

    it('Recibe IMC 1.58² / 80 = 32.046146450889275', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;

        // Act
        result = imc(1.58, 80);

        // Assert
        expect(result).toBe(32.046146450889275);
    })

})     