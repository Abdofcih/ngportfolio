import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 navButtonChange:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onMenuButtonClick(){
    this.navButtonChange = !this.navButtonChange;
  }
}
