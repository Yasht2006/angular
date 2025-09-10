import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [Login,RouterOutlet, RouterLink, Header],
  // template: `<app-root>Hii</app-root>`,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstApp');

  /* name:string|number = "Hello";
  handleClick(){
    console.log('Button Clicked..!');
    this.sum(1,2);
    this.name = 10;
  }


  sum(a:number,b:number){
    console.log('Sum is: ',a+b);
  }

  counter:number = 0;

  valueHandler(val:string){
    if(val=="dec"){
      this.counter--;
       if(this.counter<0){
        this.counter = 0;
      }
    }
    else if(val=="inc"){
      this.counter++;
    }
    else{
      this.counter = 0;
    }
  } */

  // Events
 /*  handleEvent(event: Event) {
    console.log("Event Type:", event.type);
  }

  // Set a nd Get Value
  val = "";
  getValue(event: Event){
    const val = (event.target as HTMLInputElement).value;
    // console.log("Event", name);
    this.val = val;
    console.log(val)
  }
  displayVal = "";
  showValue(){
    this.displayVal = this.val;
  }
  setValue(){
    this.displayVal = "Pat Cummins";
  }

  secondVal = "";
  showSecondValue(secval:string){
    // console.log(val);
    this.secondVal = secval;
    console.log(this.secondVal);
  }
  defaultSecondVal = "";
  setSecondValue(){
    this.defaultSecondVal = 'pat@gmail.com';
  }
 */



}
