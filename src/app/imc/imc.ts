export function imc(altura, peso) {
    let res = 0;
    if (altura > 3) {
        altura = altura / 100;
        res = peso / (altura * altura);
    }else{
        res = peso / (altura * altura);
    }
    
    return res;
}