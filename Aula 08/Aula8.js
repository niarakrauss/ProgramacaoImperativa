function podeSubir (altura, acompanhada) {
    if (altura<1.2) {
        console.log("Acesso negado");
        return false;
    } else if (altura < 1.4 && acompanhada){
        console.log("Acesso autorizado somente com acompanhante");
        return true
    } else if(altura > 1.4 && altura < 2){
        console.log("Acesso autorizado");
        return true
    } else {
        console.log("Acesso negado");
        return false;
    }
}

console.log(podeSubir(1.0, true));

podeSubir(1.3, true);
podeSubir(1.3, false);

     


