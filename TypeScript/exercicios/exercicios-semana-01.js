"use strict";
// /
//  * EXERCÍCIOS
//  *
//  * Antes de começar, certifique-se de instalar as
//  * dependências do projeto utilizando "npm install"
//  *
//  * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
//  *
//  * 1- Crie um tipo para representar um objeto que contenha as suas informações de
//  * nome, profissão, idade e uma lista de assuntos de seu interesse.
//  * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
const eu = {
    nome: "Laíssa",
    idade: 31,
    assuntosDeInteresses: ["Programação", "HTML", "CSS", "Angular"],
};
// console.log(eu.interesses[3]);
//  * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
//  * e retorne somente a lista de assuntos do objeto.
function meusInteresses(pessoa) {
    return pessoa.assuntosDeInteresses;
}
console.log(`Meus assuntos de interesse são ${meusInteresses(eu)}`);
//  * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
//  * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
var DisciplinasMJV;
(function (DisciplinasMJV) {
    DisciplinasMJV["Angular"] = "Angular";
    DisciplinasMJV["Typescript"] = "TypeScript";
    DisciplinasMJV["Git"] = "GIT";
})(DisciplinasMJV || (DisciplinasMJV = {}));
//  * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
//  * Nathan = Angular e Git, Alan = Angular, Typescript e Git
const alan = {
    nome: "Alan",
    disciplinas: [
        DisciplinasMJV.Typescript,
        DisciplinasMJV.Angular,
        DisciplinasMJV.Git,
    ],
};
const nathan = {
    nome: "Nathan",
    disciplinas: [DisciplinasMJV.Angular, DisciplinasMJV.Git],
};
//  * 8 - Declare e popule um array com os objetos do exercício 7.
const professoresMJV = [alan, nathan];
console.log(professoresMJV);
//  * 9 - Faça uma função que receba um argumento de array de Professor
//  * e retorne um novo array de strings contendo somente os nomes dos professores.
const professores = (professor) => professor.nome;
function nomesProfessores(professor) {
    return professor.map(professores);
}
console.log(`Os professores são ${nomesProfessores(professoresMJV)}`);
//  * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
// const disciplinas = (materias: ProfessoresMJV) => materias.disciplinas;
// function nomesDisciplinas(materias: ProfessoresMJV[]): DisciplinasMJV[] {
//   return materias.map(disciplinas);
// }
//  * 11 - Faça uma função que receba um argumento de array de Professores e
//  * retorne o primeiro Professor encontrado que dê aula de Typescript.
function professorTypescript(professor) {
    return professor.disciplinas.includes(DisciplinasMJV.Typescript);
}
function encontrarProfessorDeTypescript(professor) {
    return professor.find(professorTypescript);
}
console.log(encontrarProfessorDeTypescript(professoresMJV));
