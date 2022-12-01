import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  loading = true;

  students: Student[] = [
    new Student(1,'Lionel', 'Messi', new Date('1987-06-24'), true),
    new Student(2,'Jose', 'Carrizo', new Date('1982-09-24'), true),
    new Student(3,'Son', 'Goku', new Date('1986-03-02'), true),
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}
