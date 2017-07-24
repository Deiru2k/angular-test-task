import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoListComponent {
  items: Array<String> = ['spam', 'eggs'];

  additem = (item: String): void => {
    console.log(item);
    // this.items = [ ...this.items, item ];
  }
}
