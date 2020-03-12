import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TarefaListaComponent } from "./tarefa/tarefa-lista/tarefa-lista.component";
import { TarefaConsultaComponent } from "./tarefa/tarefa-consulta/tarefa-consulta.component";
import { MenuGeralComponent } from "./menu-geral/menu-geral.component";

import { HttpClientModule } from "@angular/common/http";
import { TarefaCadastroComponent } from "./tarefa/tarefa-cadastro/tarefa-cadastro.component";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "lista-tarefas",
    component: TarefaListaComponent,
    data: { title: "Lista de tarefas" }
  },
  {
    path: "cadastrar-tarefa",
    component: TarefaCadastroComponent,
    data: { title: "Cadastro de tarefas" }
  },
  {
    path: "cadastrar-tarefa/:id",
    component: TarefaCadastroComponent,
    data: { title: "Editar de tarefa" }
  },
  { path: "", component: TarefaListaComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    TarefaListaComponent,
    TarefaConsultaComponent,
    MenuGeralComponent,
    TarefaCadastroComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
