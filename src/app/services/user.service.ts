import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  //add user
  public addUser(user:any){
    return this.http.post(`http://localhost:9090/user`,user);
  }

  //get all users
  public getUsers(){
    return this.http.get(`http://localhost:9090/user`);
  }

  //get single user
  public getUser(userId:any){
    return this.http.get(`http://localhost:9090/user/${userId}`);
  }

  //delete user
  public deleteUser(userId:any){
    return this.http.delete(`http://localhost:9090/user/${userId}`)
  }
  
  //update user
  public updateUser(user:any,userId:any){
    return this.http.put(`http://localhost:9090/user/${userId}`,user);
  }
}
