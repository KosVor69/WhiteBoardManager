import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CustomerApi, Customer } from '../../sdk/index';

@Component({
    selector: 'app-customer-dialog',
    styles: [`
    form {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 50px 50px;
    }
    mat-card{
        box-shadow: 0px 0px 10px 1px #c7c7c7;
        position: relative;
        z-index: 3;
        top: -50%;
        left: -50%;
        background-color: white;
        padding: 20px;
        /*display: grid;
        grid-template-columns: 200px;
        grid-template-rows: 50px 50px 50px;*/
    }
    #form-container{
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
    }
    #grid-buttons{
        display: grid;
        grid-template-columns: 150px 150px;
        grid-template-rows: 50px;
    }
    #background {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(128, 128, 128, 0.212);
        top:0;
        left:0;
    }`],
    template: `<h1 mat-dialog-title>{{data.title}}</h1>
    <div mat-dialog-content>
    <mat-form-field>
    <input matInput placeholder="Name" [(ngModel)]="data.name">
    </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button *ngIf="data.title != 'New customer'" (click)="delete()">Delete</button>
      <button mat-button cdkFocusInitial (click)="save()">Save</button>
    </div>`,
})
export class CustomerDialogComponent {
    name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]);

    constructor(
        public dialogRef: MatDialogRef<CustomerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
        , private customerApi: CustomerApi) { }

    delete(): void {
        this.data.delete = true;
        this.dialogRef.close(this.data);
    }

    save(customer): void {
        this.dialogRef.close(this.data);
    }
}
