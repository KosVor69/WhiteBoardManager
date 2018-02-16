import {Component, Inject} from '@angular/core';
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

    times = new Array<TimeClean>();

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    fileToUpload: File = null;

    constructor(
      public dialogRef: MatDialogRef<LineDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

      delete(): void {
        this.data.delete = true;
        this.dialogRef.close(this.data);
    }

    save(line): void {

      this.data.sound = this.fileToUpload;
      this.data.times = this.times;
        this.dialogRef.close(this.data);
    }

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            const time = new TimeClean({time: value.trim() });
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

    // tslint:disable-next-line:member-ordering
    name = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+')]);
    getErrorMessage() {
        return this.name.hasError('required') ? 'You must enter a value' :
            this.name.hasError('name') ? 'Not a valid name' :
                '';
    }
  }
