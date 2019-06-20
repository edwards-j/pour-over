import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  startButton_Click() {
    this.router.navigateByUrl('/yield');
  }

}
