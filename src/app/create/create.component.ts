import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [SharedService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(public _shared: SharedService) {}

  hero = {
    name: '',
    power: 0,
    image: '',
  };

  createHero() {
    this._shared.createHero(this.hero)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
