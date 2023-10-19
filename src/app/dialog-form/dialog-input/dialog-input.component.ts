import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.css'],
})
export class DialogInputComponent implements OnInit {
  education: string[] = [
    'Secondary',
    'Diploma',
    'Higher Secondary',
    'Graduation',
    'Post Graduation',
  ];

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    company: new FormControl(''),
    gender: new FormControl(''),
    education: new FormControl(''),
  });

  handleSubmit() {
    if(this.userForm.valid){
      if(this.data){
        this.services.updateUser(this.data.id ,this.userForm.value).subscribe({
          next: (val) => {
            this.dialogRef.close();
          },
          error: (error) => {
            console.log(error);
          },
        });
      }else{
        this.services.addUser(this.userForm.value).subscribe({
          next: (val) => {
            this.dialogRef.close();
          },
          error: (error) => {
            console.log(error);
          },
        });
      }
    }
  }

  closeDialog(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data)
  }

  constructor(
    public dialogRef: MatDialogRef<any>, 
    private services: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data : any
    ) {}
}
