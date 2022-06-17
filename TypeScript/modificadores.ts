// MODIFICADORES
// Modificador opcional = (?)
// ReadOnly (para propriedades que não podem ser alteradas)


interface User {
  readonly id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "Laíssa",
  email: ""
}
