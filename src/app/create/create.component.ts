import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  providers: [SharedService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(public service: SharedService ){}

  hero = {
    name: "",
    power: 0,
    image: ""
  }


  createHero(){
    this.service.heros.push(this.hero);
    this.hero = {
      name: "",
      power: 0,
      image: ""
    }
  }
}
