import { Component, Attribute, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';




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

  index = 1;
  line1time: string;
  line1model: string;
  line1plan: number;
  line1target: number;
  line1produced: number;
  line1description: string;
  line1fpy: number;
  line2time: string;
  line2model: string;
  line2plan: number;
  line2target: number;
  line2produced: number;
  line2description: string;
  line2fpy: number;
  line3time: string;
  line3model: string;
  line3plan: number;
  line3target: number;
  line3produced: number;
  line3description: string;
  line3fpy: number;
  line4time: string;
  line4model: string;
  line4plan: number;
  line4target: number;
  line4produced: number;
  line4description: string;
  line4fpy: number;

  constructor(private route: ActivatedRoute, public mainService: MainService) {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.line = queryParam['line'];
      }
    );

    const timer = Observable.timer(1000, 1000);
    timer.subscribe(x => {
      this.dateTime = new Date();
    });

    this.mainService.getLines().subscribe((lines: Line[]) => {
      lines.forEach(element => {
        if (element.name === this.line) {
          this.mainService.getShifts(element.id).subscribe((shifts: Shift[]) => {
            shifts.forEach(shift => {
              this.mainService.getTimeLines(shift.id).subscribe((timelines: TimeLine[]) => {
                timelines.forEach(timeline => {
                  this.timelineFromTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.from));
                  this.timelineToTime.setTime(Date.parse(new Date().toDateString() + ' ' + timeline.to));
                  // tslint:disable-next-line:max-line-length
                  if (this.dateTime.getTime() >= this.timelineFromTime.getTime() && this.dateTime.getTime() <= this.timelineToTime.getTime()) {
                    console.log('Current shift found ' + shift.name);
                    this.currentShiftId = shift.id;
                    this.fillBoard();
                  }
                });
              });
            });
          });
        }
      });
    }
  );
  }

  fillBoard() {
    if (this.currentShiftId !== undefined) {
    this.mainService.getTimeLines(this.currentShiftId).subscribe((timelines: TimeLine[]) => {
      // tslint:disable-next-line:max-line-length
      timelines.sort((a: TimeLine, b: TimeLine) => Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from))
      .forEach(t => {
        switch (this.index) {
          case 1: {
            this.line1time = t.from + ' - ' + t.to;
            this.line1model = t.model;
            this.line1plan = t.plan;
            this.line1target = t.target;
            this.line1produced = t.produced;
            this.line1fpy = t.fpy;

            if (t.produced / t.target * 100 > 90) {
              document.getElementById('productivity1').style.backgroundColor = 'green';
            } else {
              document.getElementById('productivity1').style.backgroundColor = 'red';
            }
            if (t.produced / t.target * 100 > 99.99) {
              document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(1);
            } else {
              document.getElementById('productivity1').innerText = (t.produced / t.target * 100).toFixed(2);
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

            this.index++;
            console.log(this.index);
            break;
          }
          case 2: {
            this.line2time = t.from + ' - ' + t.to;
            this.line2model = t.model;
            this.line2plan = t.plan;
            this.line2target = t.target;
            this.line2produced = t.produced;
            this.line2fpy = t.fpy;
            this.index++;

            if (t.produced / t.target * 100 > 90) {
              document.getElementById('productivity2').style.backgroundColor = 'green';
            } else {
              document.getElementById('productivity2').style.backgroundColor = 'red';
            }
            if (t.produced / t.target * 100 > 99.99) {
              document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(1);
            } else {
              document.getElementById('productivity2').innerText = (t.produced / t.target * 100).toFixed(2);
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

            console.log(this.line2time);
            console.log(this.index);
            break;
          }
          case 3: {
            this.line3time = t.from + ' - ' + t.to;
            this.line3model = t.model;
            this.line3plan = t.plan;
            this.line3target = t.target;
            this.line3produced = t.produced;
            this.line3fpy = t.fpy;
            this.index++;

            if (t.produced / t.target * 100 > 90) {
              document.getElementById('productivity3').style.backgroundColor = 'green';
            } else {
              document.getElementById('productivity3').style.backgroundColor = 'red';
            }
            if (t.produced / t.target * 100 > 99.99) {
              document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(1);
            } else {
              document.getElementById('productivity3').innerText = (t.produced / t.target * 100).toFixed(2);
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

            console.log(this.line3time);
            console.log(this.index);
            break;
          }
          case 4: {
            this.line4time = t.from + ' - ' + t.to;
            this.line4model = t.model;
            this.line4plan = t.plan;
            this.line4target = t.target;
            this.line4produced = t.produced;
            this.line4fpy = t.fpy;
            this.index++;

            if (t.produced / t.target * 100 > 90) {
              document.getElementById('productivity4').style.backgroundColor = 'green';
            } else {
              document.getElementById('productivity4').style.backgroundColor = 'red';
            }
            if (t.produced / t.target * 100 > 99.99) {
              document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(1);
            } else {
              document.getElementById('productivity4').innerText = (t.produced / t.target * 100).toFixed(2);
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

            console.log(this.line4time);
            console.log(this.index);
            break;
          }
        }

      });
    });
  }
  }

}


export interface Line {
  name: string;
  id: string;
}

export interface Shift {
  name: string;
  id: string;
  lineId: string;
  nextShift: string;
}

export interface TimeLine {
  from: string;
  to: string;
  plan: number;
  target: number;
  produced: number;
  description: string;
  fpy: number;
  model: string;
  id: string;
  shiftId: string;
}
