export function rango(edad, imc, genero) {

    let res = '';

    if (edad === 'niño') {
        if(genero == 'femenino'){
            if (imc >= 12.7 && imc <= 13.3) {
                res='peso bajo';
            }else if (imc >= 13.4 && imc <= 16.3) {
                res='peso normal';
            }else if(imc >= 16.4 && imc <= 18.7){
                res='sobrepeso';
            }else {
                res='obesidad';
            }

        }else{
            if (imc >= 13.0 && imc <= 13.6) {
                res='peso bajo';
            }else if (imc >= 13.7 && imc <= 16.2) {
                res='peso normal';
            }else if(imc >= 16.3 && imc <= 18.2){
                res='sobrepeso';
            }else {
                res='obesidad';
            }
        }
        

    } else if (edad === 'adolescente') {

        if (genero == 'femenino') {

            if (imc >= 13.5 && imc <= 16.5) {
                res='peso bajo';
            }else if (imc >= 16.6 && imc <= 20.7) {
                res='peso normal';
            }else if(imc >= 20.8 && imc <= 23.6){
                res='sobrepeso';
            }else {
                res='obesidad';
            }

        } else {

            if (imc >= 13.7 && imc <= 16.4) {
                res='peso bajo';
            }else if (imc >= 16.5 && imc <= 18.5) {
                res='peso normal';
            }else if(imc >= 18.5 && imc <= 21.4){
                res='sobrepeso';
            }else {
                res='obesidad';
            }

        }
        

    } else if (edad === 'adulto') {
        if (imc >= 15.0 && imc <= 18.4) {
            res='peso bajo';
        }else if (imc >= 18.5 && imc <= 24.9) {
            res='peso normal';
        }else if(imc >= 25.0 && imc <= 29.9 ){
            res='sobrepeso';
        }else if (imc >= 30.0 && imc <= 34.9) {
            res='obesidad 1';
        }else if (imc >= 35.0 && imc <= 39.9) {
            res='obesidad 2';
        }else {
            res='obesidad 3';
        }

    } else {
        res ='error'
    }

    return res;

}