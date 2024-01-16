import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  apiUrl = "http://localhost:3000/posts";
  apiUserUrl = "http://localhost:3000/users"

  getUser()
  {
    return this.http.get(this.apiUrl)
  }

  getAllUser()
  {
    return this.http.get(this.apiUserUrl)
  }
}
