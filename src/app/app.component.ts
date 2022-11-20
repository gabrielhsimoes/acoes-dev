import { Component, OnInit } from '@angular/core';
import { fadeInDownBigOnEnterAnimation, fadeOutUpBigOnLeaveAnimation } from 'angular-animations';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInDownBigOnEnterAnimation(),
    fadeOutUpBigOnLeaveAnimation()
  ] //matriz onde declara as animações
})
export class AppComponent implements OnInit{

  isMenuOpen = false;

  ngOnInit() {

    AOS.init()
    window.addEventListener('load', AOS.refresh)

  }

  toggleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);

    window.onscroll = () => {
      this.isMenuOpen = false;
    }
  }


}
