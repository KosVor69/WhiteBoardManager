import { Router } from '@angular/router';
import { MainService } from './../service/main.service';
import { Component, OnInit } from '@angular/core';
import { Customer, CustomerApi, LineApi, ShiftApi, TimelineApi, UserApi, Line } from '../../sdk/index';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  hoverIndex: number;
  Customers: Customer[];
  Lines: Line[];

  constructor(public mainService: MainService
    , private customerApi: CustomerApi
    , private lineApi: LineApi
    , private shiftApi: ShiftApi
    , private timelineApi: TimelineApi
    , private userApi: UserApi
    , private router: Router) {

      customerApi.find(undefined, function(err, customer) { }).subscribe((customers: Customer[]) => {
        this.Customers = customers;
      });
    }

    getLines(id) {
      this.customerApi.getLines(id, undefined, function(err, line) { }).subscribe((lines: Line[]) => {
        this.Lines = lines;
      });
    }

    enter(i) {
      this.hoverIndex = i;
  }

  leave(i) {
      this.hoverIndex = null;
  }

  ngOnInit() {
  }

}
