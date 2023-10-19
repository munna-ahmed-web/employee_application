import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addUser = (data: any): Observable<any> => {
    return this._http.post('http://localhost:3000/userData', data);
  };

  getUserList=(): Observable<any> => {
    return this._http.get('http://localhost:3000/userData');
  };

  deleteUser=(id:number):Observable<any>=>{
    return this._http.delete(`http://localhost:3000/userData/${id}`);
  }

  updateUser = (id:number, data:any) =>{
    return this._http.put(`http://localhost:3000/userData/${id}`, data);
  }
}
