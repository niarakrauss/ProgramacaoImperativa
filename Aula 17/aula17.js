// ATIVIDADE
//1

let numerosPares = [2, 4, 8, 10, 12, 14, 16];
let numerosImpares = numerosPares.map(function(num){
    return num+1;
});
console.log(numerosImpares);

//2
let nomes = ["Maria", "Ana", "Mariana", "Marie", "Maria"]
let nomeMaria = nomes.filter(a => a.toLowerCase () == "Maria")
console.log(nomes);


//3

let variosNumeros = [1, 2, 3, 4, 5]

let numerosFormatados = variosNumeros.reduce(function(acumulador, string){
    console.log(acumulador, string);
    return acumulador + string;
})

//4

let animais = ["vaca", "boi", "cachorro", "gato"]
let stringAnimais = animais.forEach(function(animal){
    console.log("O animal é" +  animal);

})