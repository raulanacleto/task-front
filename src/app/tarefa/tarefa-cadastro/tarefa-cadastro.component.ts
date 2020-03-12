import { Component, OnInit } from "@angular/core";
import { TarefaService } from "src/app/services/tarefaService.service";
import { Tarefa } from "src/app/models/tarefa";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tarefa-cadastro",
  templateUrl: "./tarefa-cadastro.component.html",
  styleUrls: ["./tarefa-cadastro.component.css"]
})
export class TarefaCadastroComponent implements OnInit {
  idTarefa: number;
  tarefa: Tarefa;

  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idTarefa = +params["id"];

      if (params["id"]) {
        this.tarefaService
          .getTarefa(this.idTarefa)
          .subscribe(response => (this.tarefa = response));
      } else {
        this.tarefa = new Tarefa();
        this.tarefa.concluido = false;
      }
    });
  }

  salvarTarefa() {
    console.log(this.tarefa);

    if (this.validarCampos()) {
      if (this.tarefa.id) {
        this.tarefaService.atualizarTarefa(this.tarefa).subscribe();
      } else {
        this.tarefaService.cadastrarTarefa(this.tarefa).subscribe();
      }
    } else {
      console.log("Titulo e descrição são campos obrigatórios");
    }
  }

  validarCampos(): boolean {
    return (
      this.tarefa && this.tarefa.titulo != "" && this.tarefa.descricao != ""
    );
  }
}
