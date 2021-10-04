//Atividade 1
let dados = [
    { sexo: 'M', altura: 1.8 },
    { sexo: 'F', altura: 1.8 },
    { sexo: 'M', altura: 1.9 },
    { sexo: 'M', altura: 2 },
    { sexo: 'M', altura: 1.65 },
    { sexo: 'M', altura: 1.78 },
    { sexo: 'M', altura: 2.2 },
    { sexo: 'M', altura: 2.1 },
    { sexo: 'F', altura: 1.56 },
    { sexo: 'F', altura: 1.72 },
    { sexo: 'F', altura: 1.83 },
    { sexo: 'F', altura: 1.7 },
    { sexo: 'F', altura: 1.6 },
    { sexo: 'F', altura: 1.92 },
    { sexo: 'F', altura: 1.67 }
  ];
  
  dados.sort(function (a, b) {
    return a.altura < b.altura ? -1 : a.altura > b.altura ? 1 : 0;
  });
  
  console.log(dados[0], dados[14]);
  
  let mulheres = dados.filter(function (array) {
    return array.sexo === 'F';
  });
  console.log(mulheres);
  
  function media(array) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
      result += array[i].altura;
      return result / 8;
    }
  }
  
  console.log(media(mulheres));
  
  let homens = dados.filter(function (array) {
    return array.sexo === 'M';
  });
  console.log(homens.length);
  
//Atividade 2

let cinema = [
    { idade: 18, nota: 1 },
    { idade: 21, nota: 2 },
    { idade: 25, nota: 3 },
    { idade: 28, nota: 3 },
    { idade: 26, nota: 2 },
    { idade: 37, nota: 2 },
    { idade: 41, nota: 2 },
    { idade: 58, nota: 3 },
    { idade: 67, nota: 1 },
    { idade: 31, nota: 1 },
    { idade: 98, nota: 2 },
    { idade: 45, nota: 3 },
    { idade: 15, nota: 1 },
    { idade: 45, nota: 2 },
    { idade: 30, nota: 1 }
  ];
  
  let otimo = cinema.filter(function (array) {
    return array.nota === 3;
  });
  console.log(otimo);
  
  function mediaOtimo(array) {
    var idadesTotal = 0;
    var quantidade = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i].nota == 3) {
        quantidade++;
        idadesTotal += array[i].idade;
      }
    }
    return idadesTotal / quantidade;
  }
  console.log('-----media----');

  console.log(mediaOtimo(otimo));
  
  
  let regular = cinema.filter(function (array) {
    return array.nota === 1;
  });
  console.log(regular);
  console.log(regular.length);
  
  let bom = cinema.filter(function (array) {
    return array.nota === 2;
  });
  
  console.log(bom.length);
  console.log((bom.length / cinema.length) * 100);
  
