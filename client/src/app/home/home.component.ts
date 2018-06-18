import { TimeClean } from './../../sdk/models/TimeClean';
import { Container } from './../../sdk/models/Container';
import { ContainerApi } from './../../sdk/services/custom/Container';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { Customer } from './../../sdk/models/Customer';
import { Shift } from './../../sdk/models/Shift';
import { Line } from './../../sdk/models/Line';
import { Timeline } from './../../sdk/models/Timeline';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoopBackConfig, CustomerApi, ShiftApi, LineApi, StorageBrowser } from '../../sdk';
import { TimelineApi } from '../../sdk/services/custom/Timeline';
import { User, AccessToken } from './../../sdk/models';
import { UserApi } from '../../sdk';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerDialogComponent } from '../forms/customer-form.component';
import { LineDialogComponent } from '../forms/line-form.component';
import { ShiftDialogComponent } from '../forms/shift-form.component';
import { filter } from 'rxjs/operators';
import { Headers } from '@angular/http';

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
  customerSelector: string;

  currentLine: Line;
  currentCustomer: Customer;
  currentShift: Shift;

  customerSelected = false;
  lineSelected = false;
  shiftSelected = false;

  isCurrentShift = false;

  private user: User = new User();


  constructor(public mainService: MainService
    , private customerApi: CustomerApi
    , private lineApi: LineApi
    , private shiftApi: ShiftApi
    , private timelineApi: TimelineApi
    , private userApi: UserApi
    , private router: Router
    , public dialog: MatDialog
    , private containerApi: ContainerApi) {

    LoopBackConfig.setBaseURL('//10.152.5.93:3030');
    LoopBackConfig.setApiVersion('api');

    customerApi.find(undefined, function (err, customer) { }).subscribe((customers: Customer[]) => {
      this.Customers = customers;
    });

  }

  newCustomer(): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '300px',
      data: { title: 'New customer', customerName: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const customer = new Customer();
        customer.name = result.name;
        console.log(customer.name);
        this.customerApi.create(customer).subscribe((c: Customer) => console.log('New customer created: ' + c.name));
        this.customerSelector = '';
        this.currentCustomer = undefined;
        this.updateCustomers();
      }
    });
  }

  editCustomer(customer): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      data: { title: 'Edit customer', delete: false, name: customer.name, id: customer.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:prefer-const
      let customerEdited = new Customer();
      customerEdited.name = result.name;
      if (result !== undefined) {
        if (result.delete === true) {
          this.customerApi.deleteById(result.id).subscribe((deletedCustomer: Customer) => {
            console.log('Customer deleted: ' + deletedCustomer.name);
          });
        } else {
          this.customerApi.updateAttributes(result.id, customerEdited).subscribe((editedCustomer: Customer) => {
            console.log('Customer updated: ' + editedCustomer.name);
            this.currentCustomer = customerEdited;
          });
        }
      }
      this.updateCustomers();
    });
  }

  newLine(): void {
    const dialogRef = this.dialog.open(LineDialogComponent, {
      data: { title: 'New line', line: new Line() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        let line = new Line();
        line = result.line;
        line.customerId = this.currentCustomer.id;
        console.log(line.name);
        this.lineApi.create(line).subscribe((l: Line) => {
          const c = new Container();
          c.name = l.id;

          this.containerApi.createContainer(c).subscribe((r) => {
            if (result.sound !== undefined) {
            this.mainService.uploadFile(result.sound, l.id);
            }
            if (result.cleanSound !== undefined) {
            this.mainService.uploadFile(result.cleanSound, l.id);
            }
          });

          console.log('New line created: ' + l.name);
          this.lineSelector = '';
          this.currentLine = undefined;
          this.updateLines(l.customerId);
        });
      }
    });
  }

  editLine(line): void {
    const dialogRef = this.dialog.open(LineDialogComponent, {
      data: { title: 'Edit line', delete: false, line: line }
    });

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:prefer-const
      let lineEdited = new Line();
      lineEdited = result.line;

      if (result !== undefined) {
        if (result.delete === true) {
          this.lineApi.deleteById(line.id).subscribe((deletedLine: Line) => {
            console.log('Line deleted: ' + lineEdited.name);
          });
        } else {
          this.lineApi.updateAttributes(line.id, lineEdited).subscribe((editedLine: Line) => {
            if (result.sound !== undefined) {
              this.mainService.uploadFile(result.sound, lineEdited.id);
            }

            console.log('Line updated: ' + editedLine.name);
            this.currentLine = lineEdited;
          });
        }
      }
      this.updateLines(lineEdited.customerId);
    });
  }

  newShift(): void {
    const dialogRef = this.dialog.open(ShiftDialogComponent, {
      data: { title: 'New shift', shift: new Shift() }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        const shift = new Shift();
        shift.lineId = this.currentLine.id;
        shift.name = result.shift.name;
        this.shiftApi.create(shift).subscribe((c: Shift) => {
          console.log('New shift created: ' + c.name);
          for (let i = 0; i < 4; i++) {
            const timeLine = new Timeline();
            timeLine.shiftId = c.id;
            timeLine.from = '00:00';
            timeLine.to = '00:00';
            timeLine.plan = 0;
            timeLine.target = 0;
            timeLine.description = '';
            this.timelineApi.create(timeLine).subscribe((t: Timeline) => {
              console.log('New timeline created: ' + t.id);
          });
          }
      });
        this.shiftSelector = '';
        this.currentShift = undefined;
        this.updateShifts(this.currentLine.id);
      }
    });
  }

  editShift(shift): void {
    const dialogRef = this.dialog.open(ShiftDialogComponent, {
      data: { title: 'Edit shift', delete: false, shift: shift }
    });

    dialogRef.afterClosed().subscribe(result => {
      let shiftEdited = new Shift();
      shiftEdited = result.shift;

      if (result !== undefined) {
        if (result.delete === true) {
          this.shiftApi.deleteTimelines(shift.id).subscribe((res: string) => console.log(res));
          this.shiftApi.deleteById(shift.id).subscribe((deletedShift: Shift) => {
            console.log('Shift deleted: ' + shiftEdited.name);
          });
        } else {
          this.shiftApi.updateAttributes(shift.id, shiftEdited).subscribe((editedShift: Shift) => {

            console.log('Shift updated: ' + editedShift.name);
            this.currentShift = shiftEdited;
          });
        }
      }
      this.updateShifts(this.currentLine.id);
    });
  }

  goToWhiteBoard() {
    this.router.navigate(['/board'], { queryParams: { line: this.currentLine.id } });
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  onCustomerSelect(customer): void {
    this.customerSelected = true;
    this.currentCustomer = customer;
    console.log(customer.name);
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
    this.customerApi.getLines(customer.id, undefined, function (err, line) { }).subscribe((lines: Line[]) => {
      this.Lines = lines;
    });
  }

  updateCustomers(): void {
    this.customerApi.find(undefined, function (err, cust) { }).subscribe((customers: Customer[]) => {
      this.Customers = customers;
    });
  }

  updateLines(customerId): void {
    this.customerApi.getLines(customerId, undefined, function (err, line) { }).subscribe((lines: Line[]) => {
      this.Lines = lines;
    });
  }

  updateShifts(lineId): void {
    this.lineApi.getShifts(lineId, undefined, function (err, shift) { }).subscribe((shifts: Shift[]) => {
      this.Shifts = shifts;
    });
  }

  onLineSelect(line): void {
    this.lineSelected = true;
    this.clearEditor();
    this.currentLine = line;
    if (this.Shifts !== undefined) {
      while (this.Shifts.length > 0) {
        this.Shifts.pop();
      }
    }

    this.shiftSelector = '';
    this.lineApi.getShifts(line.id, undefined, function (err, shift) { }).subscribe((shifts: Shift[]) => {
      this.Shifts = shifts;
    });
  }


  onCurrentShiftChange(event) {
    if (this.isCurrentShift) {
      this.currentLine.currentShift = this.currentShift.id;
      this.lineApi.updateAttributes(this.currentLine.id, this.currentLine).subscribe((editedLine: Line) => {
        console.log('Line updated: ' + editedLine.name);
      });
    }
  }

  onShiftSelect(shift): void {
    this.shiftSelected = true;
    this.currentShift = shift;

    if (shift.id === this.currentLine.currentShift) {
      this.isCurrentShift = true;
    } else {
      this.isCurrentShift = false;
    }
    this.clearEditor();
    this.shiftApi.getTimelines(shift.id, undefined, function (err, timeline) { }).subscribe((timelines: Timeline[]) => {
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
              this.produced1 = String(t.produced);
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
              this.produced2 = String(t.produced);
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
              this.produced3 = String(t.produced);
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
              this.produced4 = String(t.produced);
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
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.from = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTo1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.to = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onModel1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.model = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onPlan1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.plan = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTarget1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.target = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onProduced1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.produced = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFPY1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.fpy = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onDescription1input(value): void {
    this.timelineApi.findById(this.timeline1Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.description = value;
      this.timelineApi.updateAttributes(this.timeline1Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFrom2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.from = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTo2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.to = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onModel2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.model = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onPlan2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.plan = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTarget2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.target = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onProduced2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.produced = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFPY2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.fpy = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onDescription2input(value): void {
    this.timelineApi.findById(this.timeline2Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.description = value;
      this.timelineApi.updateAttributes(this.timeline2Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFrom3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.from = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTo3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.to = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onModel3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.model = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onPlan3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.plan = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTarget3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.target = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onProduced3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.produced = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFPY3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.fpy = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onDescription3input(value): void {
    this.timelineApi.findById(this.timeline3Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.description = value;
      this.timelineApi.updateAttributes(this.timeline3Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFrom4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.from = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTo4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.to = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onModel4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.model = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onPlan4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.plan = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onTarget4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.target = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onProduced4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.produced = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onFPY4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.fpy = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
    });
  }

  onDescription4input(value): void {
    this.timelineApi.findById(this.timeline4Id, undefined, function (err, result) { }).subscribe((t: Timeline) => {
      t.description = value;
      this.timelineApi.updateAttributes(this.timeline4Id, t).subscribe((timeline: Timeline) => { });
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
