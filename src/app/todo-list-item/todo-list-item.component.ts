import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {
  @Input() item: String;
  @Input() index: Number;
  @Output() onRemove: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() onEdit: EventEmitter<[Number, String]> = new EventEmitter<[Number, String]>();

  isEditOpen: Boolean = false;

  onRemoveClick = () => {
    this.onRemove.emit(this.index);
  }

  onEditClick = () => {
    this.isEditOpen = !this.isEditOpen;
  }

  onSaveClick = (value: String) => {
    this.onEdit.emit([this.index, value])
  }
}
