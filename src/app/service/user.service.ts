import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    baseURL = environment.baseURL;
  
    httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    constructor(private http: HttpClient) { }

    signIn(request: any){
        return this.http.post(this.baseURL + '/api/user/sign-in', request);
    }

    signUp(request: any){
        return this.http.post(this.baseURL + '/api/user/create', request);
    }

    findAll(){
        return this.http.get(this.baseURL + '/api/user');
    }

    findById(id: any){
        return this.http.get(this.baseURL + '/api/user/find-by-id/' + id);
    }

    update(id: any, request: any){
        return this.http.put(this.baseURL + '/api/user/update/' + id, request);
    }

    delete(id: any){
        return this.http.delete(this.baseURL + '/api/user/delete/' + id);
    }
}