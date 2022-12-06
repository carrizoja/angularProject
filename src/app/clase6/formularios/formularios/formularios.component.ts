import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export class Hero {
  id: number;
  name: string;
  power: string;
  sidekick: boolean;
  constructor(id: number, name: string, power: string, sidekick: boolean) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.sidekick = sidekick;
  }
}


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  public formularioPrincipal: FormGroup;
  public formularioSecundario: FormGroup;
  public campoEjemplo: FormControl;

  public heroe = new Hero (1, 'Superman', 'Super fuerza', true);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      edad: [0],
      genero: ['M'],
      
    });
   this.formularioSecundario = new FormGroup({
    nombre: new FormControl(),
   })
    this.campoEjemplo = new FormControl(['Inicial']);
    this.campoEjemplo.valueChanges.subscribe((value) => {
      this.formularioPrincipal.get('nombre')?.setValue(value);
    })
  }
  submit(){
    console.log(this.formularioPrincipal.value);
    console.log(this.formularioPrincipal.valid);
  }

  submit2()
{
  console.log(this.heroe);
}
}
