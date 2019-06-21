import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {
  public strength: number;

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit(coffeeStrength) {
    this.commonService.strength = coffeeStrength.strength;
    this.router.navigateByUrl("/confirm")
  }

}
