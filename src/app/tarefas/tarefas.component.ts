import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Limpar a casa', concluida: false },
    { descricao: 'Trabalhar no projeto', concluida: true },
    { descricao: 'Caminhar no parque', concluida: false }
  ];

  
  alternarConclusao(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
