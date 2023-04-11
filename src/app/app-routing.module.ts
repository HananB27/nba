import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'', component:GamesComponent},
  {path:'teams', component:TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
