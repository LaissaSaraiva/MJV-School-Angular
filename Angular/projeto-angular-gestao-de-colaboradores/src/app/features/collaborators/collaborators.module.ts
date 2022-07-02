import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components/listagem/listagem.component';
import { PurpleDirective } from './directives/purple.directive';

@NgModule({
  declarations: [
    ListagemComponent,
    PurpleDirective
  ],
  imports: [CommonModule],
  exports: [ListagemComponent]
})
export class CollaboratorsModule {}
