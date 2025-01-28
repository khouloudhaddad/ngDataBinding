import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: '', component: CardsComponent}
];

// Configure RouterModule
imports: [RouterModule.forRoot(routes)]
