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

  /** GET heroes from the server */
  getTarefas(): Observable<any> {
    return this.http.get<any>(`${URL_APICACAO}/task`);
  }

  deletarTarefa(idTarefa: number): Observable<any> {
    return this.http.delete<any>(`${URL_APICACAO}/task/deletar/${idTarefa}`);
  }

  
   /** POST: add a new hero to the server */
   cadastrarTarefa (tarefa: Tarefa): Observable<any> {
    return this.http.post<Tarefa>(`${URL_APICACAO}/task/cadastrar/`, tarefa, this.httpOptions);
  }
}
