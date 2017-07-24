import { Component } from '@angular/core';
import R from 'ramda';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: Array<String> = ['spam', 'eggs'];
  isAddOpen: Boolean = false;

  onAddClick = () => {
    this.isAddOpen = !this.isAddOpen;
  }

  addItem = (item: String): void => {
    this.items = R.append(item, this.items);
  }

  removeItem = (index: Number): void => {
    this.items = R.remove(index, 1, this.items);
  }

  replaceItem = (index: Number, value: String): void => {
    this.items = R.update(index, value, this.items);
  }
}
