import { Hero } from './../hero.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    nome: 'Wolverine'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
