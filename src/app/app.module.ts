import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListEditComponent } from './todo-list-edit/todo-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
