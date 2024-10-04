//MAP

let lista = ['Altamiro', 'Barnabe', 'Clementino']

lista.map((item,index)=>{
    console.log(`Retornando ${item} que esta na posição ${index}`)
})

//REDUCE
//tenta reduzir um array a um valor unico, normalmente atraves de operações matematicas

let numeros = [2,3,5]

let total = numeros.reduce((acumulador,numero,indice,original)=>{
    console.log(`${acumulador} - total até agora`);
    console.log(`${numero} - valor atual`);
    //console.log(`${indice} - possição ateagora`);
    //console.log(`${original} - array original`);
    console.log("-----------------------------");
return acumulador+=numero;
})

console.log(`Total de reduce ${total}`);


//FIND
//faz busca dentro do array e 
//retorna p primeiro valor encontrado

let listagem = [2, 3, 4, 5,6 ];

let busca = listagem.find((item2)=>{
    return item2>4;
})

console.log(busca);

//Filter
//filtrar elementos dentro de um array
//retorno de filter é um array

let palavras =['alface', 'beteraba', 'cenoura','dill'];

//vamos criar um filtro retornando palavras que tem menos de sete caractéres 

resultado = palavras.filter((item3)=>{
    return item3.length<7;
})

console.log(resultado);


//implemente o código que retorna do array listagem, todos aqueles que são maiores que 4

resultado1 = listagem.filter((item4)=>{
    return item4>4;
})

console.log(resultado1);

