// Tipos Literais
const a = "a"
const positivo = true
const negativo = false

type bool = true | false

const um = 1

function checkConfirmation (input: "y" | "n"):boolean {
  return input === "y"
}


// Objetos literais, por padrão, não recebem valores literais. Mas, podemos forçar isso, utilizando as palavras reservadas "as const" após a declaração do objeto. tornando as propriedade do projeto em 'readonly' utilizando tipos literais ao inves do s valores primitivos.

const alan = {
  nome: "Alan",
  professor: true
}as const




