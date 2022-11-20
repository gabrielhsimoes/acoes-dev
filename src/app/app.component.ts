import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isMenuOpen = true;

  ngOnInit() {

    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

}
