import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public dose: number;
  public yield: number;
  public strength: number;
  public gramsWater: number;

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.yield = this.commonService.yield;
    this.strength = this.commonService.strength;
    this.gramsWater = this.commonService.gramsWater;

    this.dose = this.gramsWater / this.strength;
  }

  confirmation_Click() {
    this.router.navigateByUrl('/timer');
  }

}
