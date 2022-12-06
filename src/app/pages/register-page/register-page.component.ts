import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  firstNameControl = new FormControl('José', [Validators.required, Validators.minLength(3), this.notHomeroValidator])
  lastNameControl = new FormControl('',[Validators.required])
  emailControl = new FormControl('',[Validators.required, Validators.email]);
  passwordControl = new FormControl('',[Validators.required, Validators.minLength(6)]);
  repeatPasswordControl = new FormControl('',[Validators.required, Validators.minLength(6), this.passwordsMatchValidator]);
  streetNameControl = new FormControl('',[Validators.required]);
  streetNumberControl = new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]);
  signedTermsControl = new FormControl(false,[Validators.requiredTrue]);
  selectedCountryControl = new FormControl('',[Validators.required]);

  registerForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    repeatPassword: this.repeatPasswordControl,
    location: new FormGroup({
      streetName: this.streetNameControl,
      streetNumber: this.streetNumberControl,
      selectedCountry: this.selectedCountryControl,

    }),
    signedTerms: this.signedTermsControl

  },{
    validators: [
      this.passwordsMatchValidator
    ]
  }
  )

  notHomeroValidator(control: FormControl){
    if (control.value.toLowerCase() === 'homero'){
      return {
        isHomero: true
      }
    }
    return null

  }

  passwordsMatchValidator(){
    return () =>{
      if (this.passwordControl.value !== this.repeatPasswordControl.value){
        return {
          passwordsMatch: true
          
        }
  
      }
      return null
    }
   
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
