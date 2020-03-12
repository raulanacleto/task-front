import { Component, OnInit } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa";
import { TarefaService } from "src/app/services/tarefaService.service";
import { Router } from "@angular/router";

import * as moment from "moment";

@Component({
  selector: "app-tarefa-lista",
  templateUrl: "./tarefa-lista.component.html",
  styleUrls: ["./tarefa-lista.component.css"]
})
export class TarefaListaComponent implements OnInit {
  tarefas: Array<Tarefa>;

  constructor(private router: Router, private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.buscarTarefas();
  }

  buscarTarefas() {
    this.tarefaService
      .getTarefas()
      .subscribe(response => (this.tarefas = response.content));
  }

  excluir(indice: number, tarefa: Tarefa) {
    this.tarefaService.deletarTarefa(tarefa.id).subscribe();
    this.tarefas[indice].dataExclusao = new Date();
  }

  editar(tarefa: Tarefa) {
    this.router.navigate(["/cadastrar-tarefa", tarefa.id]);
  }

  alterarStatus(tarefa: Tarefa) {
    setTimeout(() => {
      if (tarefa.concluido) {
        tarefa.dataConclusao = moment().format("YYYY-MM-DD HH:mm:ss");
      }
      this.tarefaService.atualizarTarefa(tarefa).subscribe();
    }, 100);
  }
}
