import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //era templateUrl
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo [] = []; // lista de qualquer tipo (any) vazia
  public title: string = 'minhas tarefas';
  public form!: FormGroup;// '!' Maneira de falar ao compilador que a expressão tem valor diferente de null ou undefined

  constructor(private fb: FormBuilder) { // 'ctor' para criar de forma automatica 
    this.form = this.fb.group({ // cria um grupo de formBuild
      title: ['', Validators.compose([ // é um array com isso abre conchetes []
        Validators.minLength(3), //caso tenha mais de um validator é necessario usar o COMPOSE
        Validators.maxLength(60), 
        Validators.required,
      ])]
    })
    this.loadTarefa();
    // this.todos.push(new Todo(1,'acordar', false));
    // this.todos.push(new Todo(2,'tomar banho', true));
    // this.todos.push(new Todo(3,'comer', false));
    
  }
  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveTarefa();
    this.clearText();
  }

  clearText(){
    this.form.reset();
  }

  saveTarefa(){
    const data = JSON.stringify(this.todos); //passar lista para Json
    sessionStorage.setItem('todos', data); // armazenando o dado
  }

  loadTarefa(){
    const dataLoad = sessionStorage.getItem('todos');
    if(dataLoad!=null){
      this.todos = JSON.parse(dataLoad);
    }
  }
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo); //caso não encontre será -1

    if(index !== -1) { // metodo remover
      this.todos.splice(index, 1); //index a ser removido e quantidade de remoções
    }
    this.saveTarefa();
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.saveTarefa();
  
  }

  markAsUndone(todo: Todo){
    todo.done = false; 
    this.saveTarefa();
    
  }
}
