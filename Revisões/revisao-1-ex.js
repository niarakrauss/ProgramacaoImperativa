let estudante1 = new Estudante("Marcelo", 5, [7,8,9,10]);
let estudante2 = new Estudante("Niara", 1, [7,8,9,10]);
let estudante3 = new Estudante("Fernanda", 2, [7,8,9,10]);

listaAlunos = [estudante1, estudante2, estudante3]

let curso = {
    nomeCurso : "Digital House",
    notaAprovação : 7,
    faltasMaximas : 1,
    listaDeEstudantes,
}

console.log(curso);
