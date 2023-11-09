import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { nanoid } from 'nanoid';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  allUserInformation : Object[] = [];


  constructor(private _http: HttpClient) {}

  addUser = (data: any): Object => {
    // return this._http.post('http://localhost:3000/userData', data);
    const newData = {...data, id : nanoid()}
    return this.allUserInformation.push(newData)
  };

  getUserList=(): Object[] => {
    // return this._http.get('http://localhost:3000/userData');
    return this.allUserInformation
  };

  deleteUser=(id:any) =>{
    let deleteItemIndex :any = null;
    this.allUserInformation.forEach((SingleUser:any)=>{
      if (SingleUser.id == id) {
        deleteItemIndex = this.allUserInformation.indexOf(SingleUser)
      }
    });

    this.allUserInformation.splice(deleteItemIndex, 1)
    // return this._http.delete(`http://localhost:3000/userData/${id}`);
  }

  updateUser = (id:any, data:any) =>{
        let updateItemIdex: any = null;
        this.allUserInformation.forEach((SingleUser: any) => {
          if (SingleUser.id == id) {
            updateItemIdex = this.allUserInformation.indexOf(SingleUser);
          }
        });

        const updatedData = {...data, id: id}

        this.allUserInformation[updateItemIdex] = updatedData;

  }

}
