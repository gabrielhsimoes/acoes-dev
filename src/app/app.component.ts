import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


//construção de animações
const fadeInDown = trigger('openMobile', [ //gatilho para colocar no template html, (nome, definição)
  state('in', style({ opacity:1,transform: 'translateY(0)' })),
  transition('void => *', [
  style({ opacity:0,transform: 'translateY(100%)' }),
  animate(200)
]),
  transition('* => void', [
  animate(200, style({ opacity:0,transform: 'translateY(100%)' }))
])
])


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInDown
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

  }


}
