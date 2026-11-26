
const perifericos = [
    'Teclado Mecânico', 'Mouse Gamer', 'Headset', 'Monitor', 'Mousepad'
];


perifericos[2] = 'Webcam Full HD';

for (let contador = 0; contador < perifericos.length; contador = contador + 1) {
    console.log('Posição', contador + ':', perifericos[contador]);
}

const computador = {
    patrimonio: 'PAT-00123',
    processador: 'Intel Core i5',
    memoriaRAM: 16,
    emManutencao: false,
};

console.log('O computador de patrimônio', computador.patrimonio, 'possui processador', computador.processador, 'e', computador.memoriaRAM + 'GB de RAM.');


const carrinho = [
    { nome: 'Teclado', preco: 250, quantidade: 1 },
    { nome: 'Mouse', preco: 120.5, quantidade: 2 },
    { nome: 'Cabo HDMI', preco: 35.9, quantidade: 3 },
    { nome: 'Pen Drive', preco: 45, quantidade: 2 },
];

let valorTotal = 0;

for (let contador = 0; contador < carrinho.length; contador = contador + 1) {
    valorTotal = valorTotal + carrinho[contador].preco * carrinho[contador].quantidade;
}

console.log('Valor total da compra: R$', valorTotal.toFixed(2));

const usuario = {
    nome: 'Mariana Souza',
    cargo: 'Gerente de TI',
    permissoes: ['vendas', 'relatorios', 'estoque', 'admin'],
};

console.log('Nome:', usuario.nome);
console.log('Cargo:', usuario.cargo);

for (let contador = 0; contador < usuario.permissoes.length; contador = contador + 1) {
    console.log('- Acesso liberado:', usuario.permissoes[contador]);

    if (usuario.permissoes[contador] === 'admin') {
        console.log('Atenção: Usuário com privilégios totais!');
    }
}

const chamados = [
    {
        id: 101,
        cliente: 'Carlos Almeida',
        resolvido: false,
        historico: ['Chamado aberto', 'Técnico atribuído', 'Aguardando peça'],
    },
    {
        id: 102,
        cliente: 'Fernanda Lima',
        resolvido: true,
        historico: ['Chamado aberto', 'Problema resolvido'],
    },
    {
        id: 103,
        cliente: 'Roberto Dias',
        resolvido: false,
        historico: ['Chamado aberto', 'Diagnóstico em andamento'],
    },
];

for (let contador = 0; contador < chamados.length; contador = contador + 1) {
    
    if (chamados[contador].resolvido === false) {
        console.log('ID:', chamados[contador].id);
        console.log('Cliente:', chamados[contador].cliente);

        
        for (let contador2 = 0; contador2 < chamados[contador].historico.length; contador2 = contador2 + 1) {
            console.log('  -', chamados[contador].historico[contador2]);
        }
    }
}