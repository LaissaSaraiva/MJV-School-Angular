import { Component } from '@angular/core';

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
  };
}
