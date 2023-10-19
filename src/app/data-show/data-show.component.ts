import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogInputComponent } from '../dialog-form/dialog-input/dialog-input.component';


@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css'],
})
export class DataShowComponent implements OnInit {
  @Output() emitFuncEvent = new EventEmitter<Function>();
  userData!: MatTableDataSource<any>;
  isdDataLoaded: boolean = false;
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'phone',
    'email',
    'gender',
    'company',
    'dob',
    'action',
  ];

  constructor(private services: EmployeeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataLoad();
    this.emitFuncEvent.emit(this.dataLoad);
  }

  dataLoad = () => {
    this.services.getUserList().subscribe({
      next: (value) => {
        this.userData = new MatTableDataSource(value);
        this.isdDataLoaded = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  handleDelete = (id: number) => {
    this.services.deleteUser(id).subscribe({
      next: (res) => {
        this.dataLoad();
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  handleEdit(data: any) {
    const dialogRef = this.dialog.open(DialogInputComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe({
      next: (value)=>{
        this.dataLoad()
      },
      error:(err)=>{console.log(err)}
    })
  }
}
