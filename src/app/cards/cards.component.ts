import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { CreateComponent } from '../create/create.component';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule, CreateComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(public service: SharedService){}
}
