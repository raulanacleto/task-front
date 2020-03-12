import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { Tarefa } from "../models/tarefa";
import { URL_APICACAO } from "src/app-aplicacao";

@Injectable({ providedIn: "root" })
export class TarefaService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getTarefa(idTarefa: number): Observable<any> {
    return this.http.get<any>(`${URL_APICACAO}/tarefa/${idTarefa}`);
  }

  getTarefas(): Observable<any> {
    return this.http.get<any>(`${URL_APICACAO}/tarefa`);
  }

  deletarTarefa(idTarefa: number): Observable<any> {
    return this.http.delete<any>(`${URL_APICACAO}/tarefa/deletar/${idTarefa}`);
  }

  cadastrarTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.post<Tarefa>(
      `${URL_APICACAO}/tarefa/cadastrar/`,
      tarefa,
      this.httpOptions
    );
  }

  atualizarTarefa(tarefa: Tarefa): Observable<any> {
    return this.http.put<Tarefa>(
      `${URL_APICACAO}/tarefa/atualizar/`,
      tarefa,
      this.httpOptions
    );
  }
}
