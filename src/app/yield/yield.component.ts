import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yield',
  templateUrl: './yield.component.html',
  styleUrls: ['./yield.component.css']
})
export class YieldComponent implements OnInit {
  yield: number;

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.yield = this.commonService.yield;
  }

  yieldNext_Click () {
    this.commonService.yield = this.yield;
    this.commonService.gramsWater = this.yield * 236.59
    this.router.navigateByUrl("/strength")
  }

}
