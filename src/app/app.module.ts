import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StudentsComponent } from './layout/students/students.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion/interpolacion.component';
import { MyDirectiveDirective } from './clase4/my-directive.directive';
import { MyPipePipe } from './clase4/my-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent,
    InterpolacionComponent,
    MyDirectiveDirective,
    MyPipePipe,
    StudentsPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
