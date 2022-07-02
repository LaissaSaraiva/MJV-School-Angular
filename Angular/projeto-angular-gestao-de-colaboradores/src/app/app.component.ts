import { Component } from '@angular/core';
import { Collaborators } from './shared/models/colaborator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto-angular-gestao-de-colaboradores';
  titulo = 'Listagem dos Colaboradores da Empresa @TecnoSoluções';

  colaborador = {
    id: 7,
    nome: 'Nathan Carlos',
    salario: 4500,
    cargo: 'Dev Pleno',
    temporario: false,
  };

  colaboradores: Array<Collaborators> = [
    {
      id: 7,
      nome: 'José Carlos',
      salario: 5500,
      cargo: 'Dev Pleno',
      temporario: false,
    },

    {
      id: 10,
      nome: 'Noah Smith ',
      salario: 8500,
      cargo: 'Dev Senior',
      temporario: true,
    },

    {
      id: 15,
      nome: 'Luana Marques',
      salario: 3500,
      cargo: 'Dev Junior',
      temporario: false,
    },
  ];
}
