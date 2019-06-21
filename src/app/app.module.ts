import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YieldComponent } from './yield/yield.component';
import { FormsModule } from '@angular/forms';
import { StrengthComponent } from './strength/strength.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YieldComponent,
    StrengthComponent,
    ConfirmationComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
