let produtosCompra = ["Shampoo", "Condicionador", "Sabonete"]

//join = junta todos
console.log(produtosCompra.join("!"));

//push = acrescenta no final
produtosCompra.push("Escova", "Pente");
console.log(produtosCompra);

//pop = elimina o ultimo
produtosCompra.pop()
console.log(produtosCompra);

//shift = elimina o primeiro
produtosCompra.shift()
console.log(produtosCompra);

//unshift = adiciona primeiro
produtosCompra.unshift("Tinta")
console.log(produtosCompra);

//indexof = procura do comeco pro final = retorna a posicao
console.log(produtosCompra.indexOf("Tinta"));

//lastindexof = procura do final pro comeco
console.log(produtosCompra.lastIndexOf("Tinta"));

//includes = retorna boleano
console.log(produtosCompra.includes("Tinta"));