import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adder',
  templateUrl: './template.html',
})
export class AdderComponent {
  value: String = "";

  @Output() add: EventEmitter<String> = new EventEmitter<String>();

  addValue = (): void => {
    this.add.emit(this.value);
  }
}
