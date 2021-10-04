const EstudanteModulo = require("./funcaoConstrutora");


let estudante1= new EstudanteModulo("Roberto", 5, [5,6,8,9]);

console.log(estudante1.calcularMedia(1));
console.log(estudante1.ausente());
console.log(estudante1.faltas);