import {MatDialog} from '@angular/material/dialog';
import { Component, Output, EventEmitter } from '@angular/core';
import { DialogInputComponent } from './dialog-input/dialog-input.component';


@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css'],
})
export class DialogFormComponent {
  @Output() reloadEvent = new EventEmitter()
  shouldReload : boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog = () => {
    const dialogRef = this.dialog.open(DialogInputComponent);
    dialogRef.afterClosed().subscribe({
      next: (value)=>{
        this.shouldReload = true;
        this.reloadEvent.emit(true)
      },
      error: (err)=>{console.log(err)}
    })
  };
}
