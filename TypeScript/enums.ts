enum TipoPessoa {
  Aluno = 0,
  Professor = 1,
} //Tbm podem ser do tipo "string"

const tipoAluno = TipoPessoa.Aluno;
const tipoProfessor = TipoPessoa.Professor;


interface PessoaDevSchool {
  tipo: TipoPessoa
}
const pessoaDevSchool = {
  tipo: TipoPessoa.Aluno
}