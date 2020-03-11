import { Component, OnInit } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa";
import { TarefaService } from "src/app/services/tarefaService.service";

@Component({
  selector: "app-tarefa-lista",
  templateUrl: "./tarefa-lista.component.html",
  styleUrls: ["./tarefa-lista.component.css"]
})
export class TarefaListaComponent implements OnInit {
  tarefas: Array<Tarefa>;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.buscarTarefas();
  }

  buscarTarefas() {
    this.tarefaService
      .getTarefas()
      .subscribe(response => (this.tarefas = response.content));
  }

  excluir(tarefa: Tarefa){
    this.tarefaService.deletarTarefa(tarefa.id).subscribe()
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
  }
}
