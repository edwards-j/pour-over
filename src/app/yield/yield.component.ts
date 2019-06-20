import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-yield',
  templateUrl: './yield.component.html',
  styleUrls: ['./yield.component.css']
})
export class YieldComponent implements OnInit {
  yield: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.yield = this.commonService.yield;
  }

  yieldNext_Click () {
    this.commonService.yield = this.yield;
  }

}
