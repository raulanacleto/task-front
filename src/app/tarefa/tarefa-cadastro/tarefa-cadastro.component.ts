import { Component, OnInit } from "@angular/core";
import { TarefaService } from "src/app/services/tarefaService.service";
import { Tarefa } from "src/app/models/tarefa";

@Component({
  selector: "app-tarefa-cadastro",
  templateUrl: "./tarefa-cadastro.component.html",
  styleUrls: ["./tarefa-cadastro.component.css"]
})
export class TarefaCadastroComponent implements OnInit {
  tarefa: Tarefa = new Tarefa();

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
   
  }

  cadastrarTarefa() {
    console.log(this.tarefa);
    this.tarefaService.cadastrarTarefa(this.tarefa).subscribe();
  }
}
