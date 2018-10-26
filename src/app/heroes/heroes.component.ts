import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from "../heros.const";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros = HEROS;
  selectedHero : Hero;


  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

}
