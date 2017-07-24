import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-edit',
  templateUrl: './todo-list-edit.component.html',
  styleUrls: ['./todo-list-edit.component.css']
})
export class TodoListEditComponent implements OnInit {

  @Input() value: String;
  @Input() saveLabel: String = "Save";
  @Output() onEdit: EventEmitter<String> = new EventEmitter<String>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  cachedValue: String


  ngOnInit() {
    this.cachedValue = this.value;
  }

  onResetClick = () => {
    this.value = this.cachedValue;
  }

  onCancelClick = () => {
    this.onCancel.emit();
  }

  onSaveClick = () => {
    this.onEdit.emit(this.value);
    this.onCancel.emit();
  }

}
