import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Hero } from "./hero";
import { HEROS } from "./heros.const";
import { MessageService } from "./message.service"

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService : MessageService
  ) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes")
    return of(HEROS);
  }
}
