import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  /* 
    // Data passing between routing
    constructor(private router: Router) { }
  
    getDetails(name: string) {
      this.router.navigate(['profile'], { queryParams: { name } });
    } */

  // Dynamic Routing
  users = [
    {
      id: 1,
      name:"Pat",
      age: 32,
      email: 'pat@gmail.com'
    },
    {
      id: 2,
      name:"Pater",
      age: 22,
      email: 'peter@gmail.com'
    },
    {
      id: 3,
      name:"John",
      age: 42,
      email: 'john@gmail.com'
    },
    {
      id: 4,
      name:"Glenn",
      age: 23,
      email: 'glenn@gmail.com'
    },
  ]

}
