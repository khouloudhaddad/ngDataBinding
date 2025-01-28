import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  hero = {
    name: "",
    power: 0,
    image: ""
  }

  heros : any[] = [];

  createHero(){
    this.heros.push(this.hero);
    this.hero = {
      name: "",
      power: 0,
      image: ""
    }
  }



}
