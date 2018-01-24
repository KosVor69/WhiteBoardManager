import { Customer } from './../../sdk/models/Customer';
import { Shift } from './../../sdk/models/Shift';
import { Line } from './../../sdk/models/Line';
import { Timeline } from './../../sdk/models/Timeline';
import { Component, Attribute, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';
import { LoopBackConfig, CustomerApi, ShiftApi, LineApi } from '../../sdk';
import { Injectable, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent {
  line: string;
  lineId: string;
  timelineFromTime = new Date();
  timelineToTime = new Date();
  public currentShiftId: string;
  private querySubscription: Subscription;
  dateTime = new Date();

  line1time: string;
  line1model: string;
  line1plan = 0;
  line1target = 0;
  line1produced = 0;
  line1description: string;
  line1fpy: number;
  line2time: string;
  line2model: string;
  line2plan = 0;
  line2target = 0;
  line2produced = 0;
  line2description: string;
  line2fpy: number;
  line3time: string;
  line3model: string;
  line3plan = 0;
  line3target = 0;
  line3produced = 0;
  line3description: string;
  line3fpy: number;
  line4time: string;
  line4model: string;
  line4plan = 0;
  line4target = 0;
  line4produced = 0;
  line4description: string;
  line4fpy: number;

  totalPlan: number;
  totalTarget: number;
  totalProduced: number;
  totalDevPlan: number;
  totalDevTarget: number;
  targetFPY: string;

  constructor(private route: ActivatedRoute
    , public mainService: MainService
    , private lineApi: LineApi
    , private customerApi: CustomerApi
    , private shiftApi: ShiftApi) {

    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.line = queryParam['line'];
      }
    );

    const timer = Observable.timer(1000, 1000);
    timer.subscribe(x => {
      this.dateTime = new Date();
    });

    const timerFillBoard = Observable.timer(1000, 1000);
    timerFillBoard.subscribe(x => {
      this.fillBoard();
    });


    lineApi.findOne({ where: { name: this.line } }, function (err, lines) { }).subscribe((line: Line) => {
      this.targetFPY = String(line.targetFPY);
      lineApi.getShifts(line.id, { where: { isEnable: true } }, function (err, shifts) { }).subscribe((shifts: Shift[]) => {
        shifts.forEach(shift => {
          shiftApi.getTimelines(shift.id, undefined, function (err, timelines) { }).subscribe((timelines: Timeline[]) => {
            let i = 1;
            // tslint:disable-next-line:max-line-length
            timelines.sort((a: Timeline, b: Timeline) => Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from))
              .forEach(timeline => {
                if (i === 1) {
                  this.timelineFromTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.from));
                } else {
                  this.timelineToTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.to));
                }
                i++;
              });
            // tslint:disable-next-line:max-line-length
            if (this.dateTime.getTime() >= this.timelineFromTime.getTime() && this.dateTime.getTime() <= this.timelineToTime.getTime()) {
              console.log('Current shift found ' + shift.name);
              this.currentShiftId = shift.id;
              this.fillBoard();
            }

          });
        });
      });
    }
    );
  }

  fillBoard() {
    let tempTotalPlan = 0;
    let tempTotalTarget = 0;
    let tempTotalProduced = 0;
    let tempTotalDevTarget = 0;
    let tempTotalDevPlan = 0;

    if (this.currentShiftId !== undefined) {
      let index = 1;
      this.shiftApi.getTimelines(this.currentShiftId, undefined, function (err, timelines) { }).subscribe((timelines: Timeline[]) => {
        // tslint:disable-next-line:max-line-length
        timelines.sort((a: Timeline, b: Timeline) => Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from))
          .forEach(t => {
            switch (index) {
              case 1: {
                this.line1time = t.from + ' - ' + t.to;
                this.line1model = t.model;
                this.line1plan = t.plan;
                this.line1target = t.target;
                this.line1produced = t.produced;
                this.line1fpy = t.fpy;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;


                if (t.produced / t.target * 100 > 90) {
                  document.getElementById('productivity1').style.backgroundColor = 'green';
                } else {
                  document.getElementById('productivity1').style.backgroundColor = 'red';
                }
                if (t.produced > 0 && t.target > 0) {
                if (t.produced / t.target * 100 > 99.99) {
                  document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(1);
                } else {
                  document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(2);
                }
              }
                document.getElementById('devoftarget1').innerText = String(t.produced - t.target);
                if (t.produced - t.target > 0) {
                  document.getElementById('devoftarget1').style.color = 'green';
                } else {
                  document.getElementById('devoftarget1').style.color = 'red';
                }

                document.getElementById('devofplan1').innerText = String(t.produced - t.plan);
                if (t.produced - t.plan > 0) {
                  document.getElementById('devofplan1').style.color = 'green';
                } else {
                  document.getElementById('devofplan1').style.color = 'red';
                }
                break;
              }
              case 2: {
                this.line2time = t.from + ' - ' + t.to;
                this.line2model = t.model;
                this.line2plan = t.plan;
                this.line2target = t.target;
                this.line2produced = t.produced;
                this.line2fpy = t.fpy;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;

                if (t.produced / t.target * 100 > 90) {
                  document.getElementById('productivity2').style.backgroundColor = 'green';
                } else {
                  document.getElementById('productivity2').style.backgroundColor = 'red';
                }

                if (t.produced > 0 && t.target > 0) {
                  if (t.produced / t.target * 100 > 99.99) {
                    document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(1);
                  } else {
                    document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(2);
                  }
                }

                document.getElementById('devoftarget2').innerText = String(t.produced - t.target);
                if (t.produced - t.target > 0) {
                  document.getElementById('devoftarget2').style.color = 'green';
                } else {
                  document.getElementById('devoftarget2').style.color = 'red';
                }

                document.getElementById('devofplan2').innerText = String(t.produced - t.plan);
                if (t.produced - t.plan > 0) {
                  document.getElementById('devofplan2').style.color = 'green';
                } else {
                  document.getElementById('devofplan2').style.color = 'red';
                }
                break;
              }
              case 3: {
                this.line3time = t.from + ' - ' + t.to;
                this.line3model = t.model;
                this.line3plan = t.plan;
                this.line3target = t.target;
                this.line3produced = t.produced;
                this.line3fpy = t.fpy;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;

                if (t.produced / t.target * 100 > 90) {
                  document.getElementById('productivity3').style.backgroundColor = 'green';
                } else {
                  document.getElementById('productivity3').style.backgroundColor = 'red';
                }
                if (t.produced > 0 && t.target > 0) {
                if (t.produced / t.target * 100 > 99.99) {
                  document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(1);
                } else {
                  document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(2);
                }
              }
                document.getElementById('devoftarget3').innerText = String(t.produced - t.target);
                if (t.produced - t.target > 0) {
                  document.getElementById('devoftarget3').style.color = 'green';
                } else {
                  document.getElementById('devoftarget3').style.color = 'red';
                }

                document.getElementById('devofplan3').innerText = String(t.produced - t.plan);
                if (t.produced - t.plan > 0) {
                  document.getElementById('devofplan3').style.color = 'green';
                } else {
                  document.getElementById('devofplan3').style.color = 'red';
                }
                break;
              }
              case 4: {
                this.line4time = t.from + ' - ' + t.to;
                this.line4model = t.model;
                this.line4plan = t.plan;
                this.line4target = t.target;
                this.line4produced = t.produced;
                this.line4fpy = t.fpy;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;

                if (t.produced / t.target * 100 > 90) {
                  document.getElementById('productivity4').style.backgroundColor = 'green';
                } else {
                  document.getElementById('productivity4').style.backgroundColor = 'red';
                }
                if (t.produced > 0 && t.target > 0) {
                if (t.produced / t.target * 100 > 99.99) {
                  document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(1);
                } else {
                  document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(2);
                }
              }
                document.getElementById('devoftarget4').innerText = String(t.produced - t.target);
                if (t.produced - t.target > 0) {
                  document.getElementById('devoftarget4').style.color = 'green';
                } else {
                  document.getElementById('devoftarget4').style.color = 'red';
                }

                document.getElementById('devofplan4').innerText = String(t.produced - t.plan);
                if (t.produced - t.plan > 0) {
                  document.getElementById('devofplan4').style.color = 'green';
                } else {
                  document.getElementById('devofplan4').style.color = 'red';
                }
                break;
              }

            }

          });

        this.totalTarget = tempTotalTarget;
        this.totalPlan = tempTotalPlan;
        this.totalProduced = tempTotalProduced;
        this.totalDevTarget = tempTotalDevTarget;
        this.totalDevPlan = tempTotalDevPlan;

      });
    }
  }

}

