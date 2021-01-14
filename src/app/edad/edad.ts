export function edad(anios) {
    let res = '';
    if (anios < 10 && anios > -1) {
        res = 'niño';
    }else if (anios > 9 && anios < 20) {
        res = 'adolescente';
    }else if(anios > 19 && anios < 122){
        res = 'adulto';
    }else{
        res = 'indefinido';
    }

    return res;
}