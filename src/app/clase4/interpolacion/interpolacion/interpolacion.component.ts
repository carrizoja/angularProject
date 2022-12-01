import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  public name: string;
  public lastname: string;
  public persons = ['Juan', 'Pedro', 'Maria', 'Jose'];
  public flag = false;
  public switchValue: string = 'value';
  // parse the date
  public today = new Date();


  constructor() { }

seeData() {
  console.log('Name:', this.name);
  console.log('Last Name:', this.lastname);
}

loadData() {
  this.name = 'Lionel';
  this.lastname = 'Messi';
}

  ngOnInit(): void {
 
  }

  sayHello(): void {
    alert('Hello');
  }

}
