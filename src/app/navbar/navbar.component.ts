import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public is_active = 'home';

  constructor() { }

  ngOnInit() {
  }


  public setActive(route) {
    this.is_active = route;
  }

}
