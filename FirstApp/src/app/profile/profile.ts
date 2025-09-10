import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  /* 
  // Data pass between routes
  constructor(private route: ActivatedRoute) {

  }

  userName: string | null = "";
  ngOnInit() {
    // First Way
    // this.userName = this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    // Second Way
    // this.route.queryParams.subscribe(params => {
    //   console.log(params['name']);  
    //   this.userName = params['name'];
    // });

    // Third Way
    this.route.data.subscribe(data => {
      console.log(data['name']);
      this.userName = data['name'];

    })
  } */

  
}
