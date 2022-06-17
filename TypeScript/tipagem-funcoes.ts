// TIPAGEM DE FUNÇÕES
// Assinaturas de funções também podem ser tipadas

// TIPAGEM DE FUNÇÃO 

type FuncaoAritimetica = (x: number, y: number) => number;

const soma:FuncaoAritimetica = (x, y) => x + y;

const subtracao:FuncaoAritimetica = (x, y) => x - y;

const multiplicacao:FuncaoAritimetica = (x, y) => x * y;

const divisao:FuncaoAritimetica = (x, y) => x / y;