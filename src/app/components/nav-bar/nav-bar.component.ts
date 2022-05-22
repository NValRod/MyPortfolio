import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("home")?.scrollIntoView();
  }

  toAbout(){
    document.getElementById("about")?.scrollIntoView();
  }

  toWorks(){
    document.getElementById("works")?.scrollIntoView();
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }


}
