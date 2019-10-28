import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [TodoService]
})
export class ServicesComponent implements OnInit {

  todos: any[] = [];
  message = '';

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => {console.log('subscribe called'); this.todos = t; console.log('length: ', this.todos.length); });
  }

  add() {
    const newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(id).subscribe();
    }
  }

}
