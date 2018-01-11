import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { Shift, Line, Customer, TimeLine } from '../board/board.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  Customers: Customer[];
  Lines: Line[];
  Shifts: Shift[];

  constructor(public mainService: MainService) {
    this.mainService.getCustomers().subscribe((customers: Customer[]) => {
      this.Customers = customers;
    });
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
    document.getElementById('line-select').selectedIndex = 0;
    this.mainService.getLines(customerId).subscribe((lines: Line[]) => {
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
    document.getElementById('shift-select').selectedIndex = 0;
    this.mainService.getShifts(lineId).subscribe((shifts: Shift[]) => {
      this.Shifts = shifts;
    });
  }

  onShiftSelect(shiftId): void {
    this.clearEditor();
    this.mainService.getTimeLines(shiftId).subscribe((timelines: TimeLine[]) => {
      let i = 1;
      // tslint:disable-next-line:max-line-length
      timelines.sort((a: TimeLine, b: TimeLine) => Date.parse(new Date().toDateString() + ' ' + a.from) - Date.parse(new Date().toDateString() + ' ' + b.from))
        .forEach(t => {
          switch (i) {
            case 1: {
              document.getElementById('from1').value = t.from === null ? '' : t.from;
              document.getElementById('to1').value = t.to === null ? '' : t.to;
              document.getElementById('model1').value = t.model === null ? '' : t.model;
              document.getElementById('plan1').value = t.plan === null ? '0' : String(t.plan);
              document.getElementById('target1').value = t.target === null ? '0' : String(t.target);
              document.getElementById('produced1').value = t.produced === null ? '0' : String(t.produced);
              document.getElementById('fpy1').value = t.fpy === null ? '' : String(t.fpy);
              document.getElementById('description1').value = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 2: {
              document.getElementById('from2').value = t.from === null ? '' : t.from;
              document.getElementById('to2').value = t.to === null ? '' : t.to;
              document.getElementById('model2').value = t.model === null ? '' : t.model;
              document.getElementById('plan2').value = t.plan === null ? '0' : String(t.plan);
              document.getElementById('target2').value = t.target === null ? '0' : String(t.target);
              document.getElementById('produced2').value = t.produced === null ? '0' : String(t.produced);
              document.getElementById('fpy2').value = t.fpy === null ? '' : String(t.fpy);
              document.getElementById('description2').value = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 3: {
              document.getElementById('from3').value = t.from === null ? '' : t.from;
              document.getElementById('to3').value = t.to === null ? '' : t.to;
              document.getElementById('model3').value = t.model === null ? '' : t.model;
              document.getElementById('plan3').value = t.plan === null ? '0' : String(t.plan);
              document.getElementById('target3').value = t.target === null ? '0' : String(t.target);
              document.getElementById('produced3').value = t.produced === null ? '0' : String(t.produced);
              document.getElementById('fpy3').value = t.fpy === null ? '' : String(t.fpy);
              document.getElementById('description3').value = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
            case 4: {
              document.getElementById('from4').value = t.from === null ? '' : t.from;
              document.getElementById('to4').value = t.to === null ? '' : t.to;
              document.getElementById('model4').value = t.model === null ? '' : t.model;
              document.getElementById('plan4').value = t.plan === null ? '0' : String(t.plan);
              document.getElementById('target4').value = t.target === null ? '0' : String(t.target);
              document.getElementById('produced4').value = t.produced === null ? '0' : String(t.produced);
              document.getElementById('fpy4').value = t.fpy === null ? '' : String(t.fpy);
              document.getElementById('description4').value = t.description.length === 0 ? '' : String(t.description);
              i++;
              break;
            }
          }
        });
    });
  }

  onFrom1input(value): void {

  }

  clearEditor() {
    document.getElementById('from1').value = '';
    document.getElementById('to1').value = '';
    document.getElementById('model1').value = '';
    document.getElementById('plan1').value = '';
    document.getElementById('target1').value = '';
    document.getElementById('produced1').value = '';
    document.getElementById('fpy1').value = '';
    document.getElementById('description1').value = '';
    document.getElementById('from2').value = '';
    document.getElementById('to2').value = '';
    document.getElementById('model2').value = '';
    document.getElementById('plan2').value = '';
    document.getElementById('target2').value = '';
    document.getElementById('produced2').value = '';
    document.getElementById('fpy2').value = '';
    document.getElementById('description2').value = '';
    document.getElementById('from3').value = '';
    document.getElementById('to3').value = '';
    document.getElementById('model3').value = '';
    document.getElementById('plan3').value = '';
    document.getElementById('target3').value = '';
    document.getElementById('produced3').value = '';
    document.getElementById('fpy3').value = '';
    document.getElementById('description3').value = '';
    document.getElementById('from4').value = '';
    document.getElementById('to4').value = '';
    document.getElementById('model4').value = '';
    document.getElementById('plan4').value = '';
    document.getElementById('target4').value = '';
    document.getElementById('produced4').value = '';
    document.getElementById('fpy4').value = '';
    document.getElementById('description4').value = '';
  }

}
