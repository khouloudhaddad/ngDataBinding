import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { SharedService } from '../shared.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [SharedService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(public service: SharedService){}

}
