//TypeScript
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'todo-list'
})

@View({
  template: `
    <ul>
      <li *ng-for="#todo of todos">
        {{ todo }}
      </li>
    </ul>
    <input #todotext (keyup)="doneTyping($event, todotext)">
    <button (click)="addTodo(todotext.value)">Add Todo</button>
          `,
  directives: [NgFor]
})

class TodoList {

  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event, todotext) {
    
    console.log(todotext, todotext.value);
    
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }

}
bootstrap(TodoList);
