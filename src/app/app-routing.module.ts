import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YieldComponent } from './yield/yield.component';
import { StrengthComponent } from './strength/strength.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path: 'home', component:  HomeComponent},
  {path: 'yield', component: YieldComponent},
  {path: 'strength', component: StrengthComponent},
  {path: 'confirm', component: ConfirmationComponent},
  {path: 'timer', component: TimerComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
