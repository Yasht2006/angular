import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Reactive-Forms');

  /*
  // Basic Reactive Forms 
    name= new FormControl('ahb');
    password = new FormControl('111');
  
    displayValue(){
      console.log(this.name.value, this.password.value);
    }
  
    setValues(){
      this.name.setValue('Pat');
      this.password.setValue('1234');
    } */

    // Form Grouping with Reactive Forms & validation, ErrorHandling
    profileForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/)]),
    });

    onSubmit(){
      // console.log("Called..!");
      console.log(this.profileForm.value);
      
    }

    // setValue(){
    //   this.profileForm.setValue({
    //     name:'Pat',
    //     password: '123',
    //     email: 'pat@gmail.com'
    //   });
    // }

    get name(){
      return this.profileForm.get('name');
    }
    get email(){
      return this.profileForm.get('email');
    }
    get password(){
      return this.profileForm.get('password');
    }
}
