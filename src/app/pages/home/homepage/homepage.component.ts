import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  buttons:{label:string,route:string}[]=[
    {label:'Price T-Design',route:'/price-table'},
  ];

  constructor(private router:Router){}

  onButtonClick(route:string,label:string){
    this.router.navigate([route]);
    alert(`${label} button clicked`);
  }
}
