import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoListComponent } from './TodoList.component'
import { AdderComponent } from './Adder/Adder.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AdderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TodoListComponent, AdderComponent]
})
export class AppModule { }
