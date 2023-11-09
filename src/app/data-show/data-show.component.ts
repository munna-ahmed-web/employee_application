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
    // 'id',
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
    const value = this.services.getUserList()
        this.userData = new MatTableDataSource(value);
        this.isdDataLoaded = true;
  };

  handleDelete = (id : any) => {
    this.services.deleteUser(id);
    this.dataLoad();
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
