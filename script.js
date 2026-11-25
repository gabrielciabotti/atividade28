// OBJETO
// const nome = 'nome: ze da manga e idade: 17';
// const idade = 17;

// console.log(nome); //"ze da manga"
// console.log(idade);

// chave: valor
// const dadosUsuario = {
//     nome: 'Ze da Manga',
//     idade: 17,
//     endereco: {
//         rua: 'dos bobo',
//         numero: '188',
//         cep: '16767-66',
//         bairro: 'sé',
//         regiao: {
//             cidade: 'qualque uma menos sumaré',
//             estado: 'SP',
//             país: 'Brasil',
//         }
//     }
// }

// console.log(dadosUsuario);
// console.log(dadosUsuario.nome);
// console.log(dadosUsuario.idade);

// console.log(dadosUsuario);


// //LISTAS (vetor, array)
// //lista de valores
// const listaDeFrutas = [
//     'maca', 'banana', 'jaca', 'buriti'
// ];

// // console.log(listaDeFrutas);

// // console.log(listaDeFrutas[1]);

// for (let contador = 0; contador < 4; contador = contador + 1) {
//     console.log(listaDeFrutas[contador])
// }


// const listaExemplo = [
//     {
//         nome: 'ola',
//         idade: 17,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'tenho dezoito',
//         idade: 18,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'nao tenho dezoito',
//         idade: 14,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'to com 20',
//         idade: 20,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'nos eua eu sou maior',
//         idade: 21,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'quase subindo',
//         idade: 80,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
//     {
//         nome: 'finjo q sou novo',
//         idade: 30,
//         listaDeContatos: [
//             '13213131315', '41368413513', '564684354'
//         ]
//     },
// ];

// console.log(listaExemplo)

// for (let contador = 0; contador < 7; contador = contador + 1) {
//     if (listaExemplo[contador].idade > 18) {
//         console.log(listaExemplo[contador].nome, 'eh maior de idade!', listaExemplo[contador].idade, 'a idade dele!')
//     }
// }


// ex:1

const obperiféricos = {
    "teclado Mecanico", "Mouse Gamer", "Webcam Full HD", "item4:SSD 1TB","Processador Ryzen "

}

console.log(obperiféricos)

for (let contador = 0; contador < 5; contador = contador + 1) {
    console.log(obperiféricos[contador])
}