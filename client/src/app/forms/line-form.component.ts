import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { TimeClean } from '../../sdk/index';

@Component({
    selector: 'app-line-dialog',
    styleUrls: ['./line-form.component.css'],
    templateUrl: './line-form.component.html'
  })
  export class LineDialogComponent {

    times = new Array<string>();

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    fileToUpload: File = null;
    fileCleanSound: File = null;
    constructor(
      public dialogRef: MatDialogRef<LineDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

      // tslint:disable-next-line:use-life-cycle-interface
      ngOnInit() {
        if (this.data.line.times !== undefined) {
        this.times = this.data.line.times;
        }
      }


      delete(): void {
        this.data.delete = true;
        this.dialogRef.close(this.data);
    }

    save(): void {
      if (this.fileToUpload !== null) {
        this.data.line.sound = this.fileToUpload.name;
        this.data.sound = this.fileToUpload;
      }
      if (this.fileCleanSound !== null) {
        this.data.line.cleanSound = this.fileCleanSound.name;
        this.data.cleanSound = this.fileCleanSound;
      }
      this.data.line.times = this.times;
        this.dialogRef.close(this.data);
    }

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

  getCleanSound(files: FileList) {
    this.fileCleanSound = files.item(0);
  }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            const time = value;
          this.times.push(time);
        }

        // Reset the input value
        if (input) {
          input.value = '';
        }
      }

      remove(time: any): void {
        const index = this.times.indexOf(time);
        if (index >= 0) {
          this.times.splice(index, 1);
        }
      }
  }
