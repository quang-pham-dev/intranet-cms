import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intranet-cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
