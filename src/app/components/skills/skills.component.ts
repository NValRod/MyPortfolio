import { Component, OnInit } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationIndicators = false;
    config.showNavigationArrows = true;
    config.wrap = true
    config.interval = 4200;
    config.animation = true;
    config.keyboard = true
  }

  ngOnInit(): void {
  }
  images = [
    'assets/LogoHTML.jpeg',
    'assets/LogoCSS.webp',
    'assets/LogoJS.png',
    'assets/LogoAngular.png',
    'assets/LogoGitHub.png',
    'assets/LogoGIT.png',
    'assets/LogoBootstrap.png',
    'assets/LogoRuby.png',
    'assets/LogoMySQL.png',
    'assets/LogoReact.png',
    'assets/LogoTypescript.png'
  ];
}
