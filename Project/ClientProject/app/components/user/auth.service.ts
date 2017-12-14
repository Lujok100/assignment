import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from '@angular/router'
import { URLSearchParams } from '@angular/http'
import { UserService } from '../../services/UserService'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Subject, Observable } from 'rxjs/RX'

@Injectable()
export class AuthService {

    static currentUser = null;
    url: string = null;
    user: IUser
    constructor(private http: Http, private router: Router) {
        this.url = "http://localhost:65058/auth";
    }

    loginUser(userName: string, password: string) {
        console.log("auth.service username: " + userName + ", password: " + password);

        let params: URLSearchParams = new URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);

        let request = this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'application/json' }) })

        request
            .map((response) => {
                AuthService.currentUser = response.json();
            })
            .subscribe((response) => {
                console.log("Success");
            }, (error) => {
                console.log("Error: " + error);
            });

        return request;
    }

    loginNewRegister() {

    }

    logoutUser() {

    }


    isAuthenticated() {

    }
}