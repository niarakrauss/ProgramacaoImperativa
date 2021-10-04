function polegadas (comprimento){
    return comprimento / 2.54
}
console.log(polegadas(100));

function converterString (a){
    return "http://www."+ a +".com.br"
}
console.log(converterString("funcaojs"));

function exclamação (frase){
    return frase + "!!!!"
}
console.log(exclamação("O Arthur vai dormir a tarde toda"));

function idadeCachorros (idade){
    return idade * 7
}
console.log(idadeCachorros(7));

function horarioTrabalho (salario){
    return salario / 160
}
console.log(horarioTrabalho(5000));

function calculadoraIMC (peso, altura){
    return peso / (altura*altura)
}
console.log(calculadoraIMC(80,1.70));