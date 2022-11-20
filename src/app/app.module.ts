import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './desafios/desafio1/toolbar/toolbar.component';
import { NavbarComponent } from './desafios/desafio1/navbar/navbar.component';
import { StudentsComponent } from './desafios/desafio1/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
