import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public timeLeft: number

  constructor() { }

  ngOnInit() {
    this.timeLeft = 5;
  }

  startTimer() {
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--
      }
    }
    , 1000)

  }

}
