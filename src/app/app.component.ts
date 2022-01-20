import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //era templateUrl
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo [] = []; // lista de qualquer tipo (any) vazia
  public title: string = 'minhas tarefas';
  public form: FormGroup | undefined;

  constructor() { // 'ctor' para criar de forma automatica 
    this.todos.push(new Todo(1,'acordar', false));
    this.todos.push(new Todo(2,'tomar banho', true));
    this.todos.push(new Todo(3,'comer', false));
    
  }
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo); //caso não encontre será -1

    if(index !== -1) { // metodo remover
      this.todos.splice(index, 1); //index a ser removido e quantidade de remoções
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false; 
  }
}
