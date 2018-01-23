import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { Customer } from './../../sdk/models/Customer';
import { Shift } from './../../sdk/models/Shift';
import { Line } from './../../sdk/models/Line';
import { Timeline } from './../../sdk/models/Timeline';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoopBackConfig, CustomerApi, ShiftApi, LineApi } from '../../sdk';
import { TimelineApi } from '../../sdk/services/custom/Timeline';

import { User, AccessToken } from './../../sdk/models';
import { UserApi } from '../../sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  Customers: Customer[];
  Lines: Line[];
  Shifts: Shift[];
 /* private _fb: FormBuilder;
  myForm: FormGroup;*/
  from1: string;
  to1: string;
  model1: string;
  plan1: string;
  target1: string;
  produced1: string;
  fpy1: string;
  description1: string;
  from2: string;
  to2: string;
  model2: string;
  plan2: string;
  target2: string;
  produced2: string;
  fpy2: string;
  description2: string;
  from3: string;
  to3: string;
  model3: string;
  plan3: string;
  target3: string;
  produced3: string;
  fpy3: string;
  description3: string;
  from4: string;
  to4: string;
  model4: string;
  plan4: string;
  target4: string;
  produced4: string;
  fpy4: string;
  description4: string;

  timeline1Id: string;
  timeline2Id: string;
  timeline3Id: string;
  timeline4Id: string;

  lineSelector: string;
  shiftSelector: string;

  private user: User = new User();


  constructor(public mainService: MainService
    , private customerApi: CustomerApi
    , private lineApi: LineApi
    , private shiftApi: ShiftApi
    , private timelineApi: TimelineApi, private userApi: UserApi) {
      this.user.username = 'admin';
      this.user.password = 'admin';
      this.user.email = 'admin@admin.com';
      // this.signin();
    customerApi.find(undefined, function(err, customer) { }).subscribe((customers: Customer[]) => {
      this.Customers = customers;
    });

  }

  private signup(): void {
    this.userApi.create(this.user).subscribe((user: User) => this.signin());
}

private signin(): void {
  this.userApi.login(this.user, undefined, undefined, function(err, result) {
    console.log(result);
  }).subscribe((token: AccessToken) => alert('Fake Redirect'));
}

  onCustomerSelect(customerId): void {
    this.clearEditor();
    if (this.Shifts !== undefined) {
      while (this.Shifts.length > 0) {
        this.Shifts.pop();
      }
    }
    if (this.Lines !== undefined) {
      while (this.Lines.length > 0) {
        this.Lines.pop();
      }
    }

    this.lineSelector = '';
    this.customerApi.getLines(customerId, undefined, function(err, line) { }).subscribe((lines: Line[]) => {
      this.Lines = lines;
    });
  }

  onLineSelect(lineId): void {
    this.clearEditor();
    if (this.Shifts !== undefined) {
      while (this.Shifts.length > 0) {
        this.Shifts.pop();
      }
    }

    this.shiftSelector = '';
    this.lineApi.getShifts(lineId, undefined, function(err, shift) { }).subscribe((shifts: Shift[]) => {
      this.Shifts = shifts;
    });
  }

  onShiftSelect(shiftId): void {
    this.clearEditor();
    this.shiftApi.getTimelines(shiftId, undefined, function(err, timeline) { }).subscribe((timelines: Timeline[]) => {
      let i = 1;
      // tslint:disable-next-line:max-line-length
      timelines.sort((a: Timeline, b: Timeline) => Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from))
        .forEach(t => {
          switch (i) {
            case 1: {
              this.timeline1Id = t.id;
              this.from1 = t.from === null ? '' : t.from;
              this.to1 = t.to === null ? '' : t.to;
              this.model1 = t.model === null ? '' : t.model;
              this.plan1 = t.plan === null ? '0' : String(t.plan);
              this.target1 = t.target === null ? '0' : String(t.target);
              this.produced1 = t.produced === null ? '0' : String(t.produced);
              this.fpy1 = t.fpy === null ? '' : String(t.fpy);
              this.description1 = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 2: {
              this.timeline2Id = t.id;
              this.from2 = t.from === null ? '' : t.from;
              this.to2 = t.to === null ? '' : t.to;
              this.model2 = t.model === null ? '' : t.model;
              this.plan2 = t.plan === null ? '0' : String(t.plan);
              this.target2 = t.target === null ? '0' : String(t.target);
              this.produced2 = t.produced === null ? '0' : String(t.produced);
              this.fpy2 = t.fpy === null ? '' : String(t.fpy);
              this.description2 = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 3: {
              this.timeline3Id = t.id;
              this.from3 = t.from === null ? '' : t.from;
              this.to3 = t.to === null ? '' : t.to;
              this.model3 = t.model === null ? '' : t.model;
              this.plan3 = t.plan === null ? '0' : String(t.plan);
              this.target3 = t.target === null ? '0' : String(t.target);
              this.produced3 = t.produced === null ? '0' : String(t.produced);
              this.fpy3 = t.fpy === null ? '' : String(t.fpy);
              this.description3 = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 4: {
              this.timeline4Id = t.id;
              this.from4 = t.from === null ? '' : t.from;
              this.to4 = t.to === null ? '' : t.to;
              this.model4 = t.model === null ? '' : t.model;
              this.plan4 = t.plan === null ? '0' : String(t.plan);
              this.target4 = t.target === null ? '0' : String(t.target);
              this.produced4 = t.produced === null ? '0' : String(t.produced);
              this.fpy4 = t.fpy === null ? '' : String(t.fpy);
              this.description4 = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
          }
        });
    });
  }

  onFrom1input(value): void {
   this.timelineApi.findById(this.timeline1Id, undefined, function(err, result) { }).subscribe((t: Timeline) => {
         t.from  = value;
         console.log(t.from);
         /*this.timelineApi.upsert(t, function(err, headers) { }).subscribe((timeline: Timeline) => {
          console.log('Done');
        });*/

       /* var request = new XMLHttpRequest();
        var url = 'http://10.152.5.93:3030/api/Users/login';

          if (request) {
            request.open('POST', url , true);
            // request.setRequestHeader('Content-type', 'application/json');
            // request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.withCredentials = true;
            // invocation.onreadystatechange = handler;
            request.send(this.user);
          }*/


          this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => {
            console.log(timeline.from);
          });
    });
  }

  clearEditor() {
    this.from1 = '';
    this.to1 = '';
    this.model1 = '';
    this.plan1 = '';
    this.target1 = '';
    this.produced1 = '';
    this.fpy1 = '';
    this.description1 = '';
    this.from2 = '';
    this.to2 = '';
    this.model2 = '';
    this.plan2 = '';
    this.target2 = '';
    this.produced2 = '';
    this.fpy2 = '';
    this.description2 = '';
    this.from3 = '';
    this.to3 = '';
    this.model3 = '';
    this.plan3 = '';
    this.target3 = '';
    this.produced3 = '';
    this.fpy3 = '';
    this.description3 = '';
    this.from4 = '';
    this.to4 = '';
    this.model4 = '';
    this.plan4 = '';
    this.target4 = '';
    this.produced4 = '';
    this.fpy4 = '';
    this.description4 = '';
  }

}
