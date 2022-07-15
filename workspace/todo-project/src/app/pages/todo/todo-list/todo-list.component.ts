import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  name = 'Fernando';
  todos: Array<Todo> = [];
  todo: Todo = {
    id:0,
    title:'',
    done: false,
  };

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('todos');
    let todos: any = JSON.parse(items);
    if(!todos){
      this.todos=[];
    }else{
      this.todos = todos;
    }
  }

  addTodo(title : string){
    this.todo.id=this.todos.length+1;
    this.todo.title=title;
    this.todos.push(this.todo);
    console.log(this.todos);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

  removeTodo(event: any){
    let index = this.todos.indexOf(event)
    this.todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
