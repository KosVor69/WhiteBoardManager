import { forEach } from '@angular/router/src/utils/collection';
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
import { LoopBackConfig, CustomerApi, ShiftApi, LineApi, ContainerApi } from '../../sdk';
import { Injectable, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent {
  line: Line;
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

  totalPlan = 0;
  totalTarget = 0;
  totalProduced = 0;
  totalDevPlan = 0;
  totalDevTarget = 0;
  targetFPY: number;

  isMessageVisible = false;
  messageClean: string;
  backgroundColor: string;
  color: string;

  constructor(private route: ActivatedRoute
    , public mainService: MainService
    , private lineApi: LineApi
    , private customerApi: CustomerApi
    , private shiftApi: ShiftApi
    , private containerApi: ContainerApi) {

    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        lineApi.findById(queryParam['line']).subscribe((l: Line) => {
          this.line = l;
          this.targetFPY = l.targetFPY;
          this.currentShiftId = l.currentShift;

          const timer = Observable.timer(1000, 1000);
          timer.subscribe(x => {
            this.dateTime = new Date();
          });

          const timerFillBoard = Observable.timer(1000, 1000);
          timerFillBoard.subscribe(x => {
            this.fillBoard();

            if (l.isEnableClean) {
              l.times.forEach((value) => {
                // tslint:disable-next-line:max-line-length
                if (Date.parse(new Date().toDateString() + ' ' + value) > Date.now() - 500 && Date.parse(new Date().toDateString() + ' ' + value) < Date.now() + 500) {
                  this.isMessageVisible = true;
                  this.backgroundColor = 'red';
                  this.color = 'white';
                  this.messageClean = l.messageClean;

                  const audio = new Audio();
                  audio.src = 'http://10.152.5.93:3030/api/containers/' + l.id + '/download/' + l.cleanSound;
                  audio.load();
                  audio.play();

                  setTimeout(function () {
                    this.isMessageVisible = false;
                  }.bind(this), 30000);
                }
              });
            }
          });
        }
        );
      }
    );


    const refreshLine = Observable.timer(60000, 60000);
    refreshLine.subscribe(x => {
      lineApi.findById(this.line.id).subscribe((l: Line) => {
        this.line = l;
      });
    });

  }


  check(time) {
    // tslint:disable-next-line:max-line-length
    if (Date.parse(new Date().toDateString() + ' ' + time) > Date.now() - 500 && Date.parse(new Date().toDateString() + ' ' + time) < Date.now() + 500) {
      this.isMessageVisible = true;
      this.backgroundColor = 'black';
      this.color = 'white';
      this.messageClean = 'ПЕРЕРЫВ';

      const audio = new Audio();
      audio.src = 'http://10.152.5.93:3030/api/containers/' + this.line.id + '/download/' + this.line.sound;
      audio.load();
      audio.play();

      setTimeout(function () {
        this.isMessageVisible = false;
      }.bind(this), 30000);
    }
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

            this.check(t.to);

            switch (index) {
              case 1: {
                this.line1time = t.from + ' - ' + t.to;
                this.line1model = t.model;
                this.line1plan = t.plan;
                this.line1target = t.target;
                this.line1produced = t.produced;
                if (t.fpy !== 0) { this.line1fpy = t.fpy;
                } else { this.line1fpy = null; }
                this.line1description = t.description;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                if (t.produced !== 0) {
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;
                }

                if (t.produced === 0) {
                  document.getElementById('productivity1').style.backgroundColor = 'white';
                  document.getElementById('productivity1').innerText = (0).toFixed(1);
                  document.getElementById('devoftarget1').innerText = '';
                  document.getElementById('devofplan1').innerText = '';
                } else {
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
                  if (t.produced - t.target >= 0) {
                    document.getElementById('devoftarget1').style.color = 'green';
                  } else {
                    document.getElementById('devoftarget1').style.color = 'red';
                  }

                  document.getElementById('devofplan1').innerText = String(t.produced - t.plan);
                  if (t.produced - t.plan >= 0) {
                    document.getElementById('devofplan1').style.color = 'green';
                  } else {
                    document.getElementById('devofplan1').style.color = 'red';
                  }

                  if (t.fpy >= this.targetFPY) {
                    document.getElementById('fpy1').style.color = 'green';
                  } else {
                    document.getElementById('fpy1').style.color = 'red';
                  }

                }

                break;
              }
              case 2: {
                this.line2time = t.from + ' - ' + t.to;
                this.line2model = t.model;
                this.line2plan = t.plan;
                this.line2target = t.target;
                this.line2produced = t.produced;
                if (t.fpy !== 0) { this.line2fpy = t.fpy;
                } else { this.line2fpy = null; }
                this.line2description = t.description;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                if (t.produced !== 0) {
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;
                }

                if (t.produced === 0) {
                  document.getElementById('productivity2').style.backgroundColor = 'white';
                  document.getElementById('productivity2').innerText = (0).toFixed(1);
                  document.getElementById('devoftarget2').innerText = '';
                  document.getElementById('devofplan2').innerText = '';
                } else {
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
                  if (t.produced - t.target >= 0) {
                    document.getElementById('devoftarget2').style.color = 'green';
                  } else {
                    document.getElementById('devoftarget2').style.color = 'red';
                  }

                  document.getElementById('devofplan2').innerText = String(t.produced - t.plan);
                  if (t.produced - t.plan >= 0) {
                    document.getElementById('devofplan2').style.color = 'green';
                  } else {
                    document.getElementById('devofplan2').style.color = 'red';
                  }

                  if (t.fpy >= this.targetFPY) {
                    document.getElementById('fpy2').style.color = 'green';
                  } else {
                    document.getElementById('fpy2').style.color = 'red';
                  }
                }

                break;
              }
              case 3: {
                this.line3time = t.from + ' - ' + t.to;
                this.line3model = t.model;
                this.line3plan = t.plan;
                this.line3target = t.target;
                this.line3produced = t.produced;
                if (t.fpy !== 0) { this.line3fpy = t.fpy;
                } else { this.line3fpy = null; }
                this.line3description = t.description;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                if (t.produced !== 0) {
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;
                }

                if (t.produced === 0) {
                  document.getElementById('productivity3').style.backgroundColor = 'white';
                  document.getElementById('productivity3').innerText = (0).toFixed(1);
                  document.getElementById('devoftarget3').innerText = '';
                  document.getElementById('devofplan3').innerText = '';
                } else {
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
                  if (t.produced - t.target >= 0) {
                    document.getElementById('devoftarget3').style.color = 'green';
                  } else {
                    document.getElementById('devoftarget3').style.color = 'red';
                  }

                  document.getElementById('devofplan3').innerText = String(t.produced - t.plan);
                  if (t.produced - t.plan >= 0) {
                    document.getElementById('devofplan3').style.color = 'green';
                  } else {
                    document.getElementById('devofplan3').style.color = 'red';
                  }

                  if (t.fpy >= this.targetFPY) {
                    document.getElementById('fpy3').style.color = 'green';
                  } else {
                    document.getElementById('fpy3').style.color = 'red';
                  }
                }

                break;
              }
              case 4: {
                this.line4time = t.from + ' - ' + t.to;
                this.line4model = t.model;
                this.line4plan = t.plan;
                this.line4target = t.target;
                this.line4produced = t.produced;
                if (t.fpy !== 0) { this.line4fpy = t.fpy;
                } else { this.line4fpy = null; }
                this.line4description = t.description;
                index++;

                tempTotalPlan += t.plan;
                tempTotalTarget += t.target;
                tempTotalProduced += t.produced;
                if (t.produced !== 0) {
                tempTotalDevTarget += t.produced - t.target;
                tempTotalDevPlan += t.produced - t.plan;
                }

                if (t.produced === 0) {
                  document.getElementById('productivity4').style.backgroundColor = 'white';
                  document.getElementById('productivity4').innerText = (0).toFixed(1);
                  document.getElementById('devoftarget4').innerText = '';
                  document.getElementById('devofplan4').innerText = '';
                } else {
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
                  if (t.produced - t.target >= 0) {
                    document.getElementById('devoftarget4').style.color = 'green';
                  } else {
                    document.getElementById('devoftarget4').style.color = 'red';
                  }

                  document.getElementById('devofplan4').innerText = String(t.produced - t.plan);
                  if (t.produced - t.plan >= 0) {
                    document.getElementById('devofplan4').style.color = 'green';
                  } else {
                    document.getElementById('devofplan4').style.color = 'red';
                  }

                  if (t.fpy >= this.targetFPY) {
                    document.getElementById('fpy4').style.color = 'green';
                  } else {
                    document.getElementById('fpy4').style.color = 'red';
                  }
                }

                break;
              }

            }

          });

        this.totalTarget = tempTotalTarget;
        this.totalPlan = tempTotalPlan;
        this.totalProduced = tempTotalProduced;
        this.totalDevTarget = tempTotalDevTarget;
        if (tempTotalDevTarget >= 0) {
          document.getElementById('devoftargetotal').style.color = 'green';
        } else {
          document.getElementById('devoftargetotal').style.color = 'red';
        }
        this.totalDevPlan = tempTotalDevPlan;
        if (tempTotalDevPlan >= 0) {
          document.getElementById('devofplantotal').style.color = 'green';
        } else {
          document.getElementById('devofplantotal').style.color = 'red';
        }
      });
    }
  }

}

