import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model'
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Rx'
@Injectable()

export class UserService {

    constructor(private http: Http) { }

   

    createUser(username, password, firstName, lastName) {
        let bool: number = 0
        let temp: number = 1
        let user = {

            id: 0,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        
            
           
        this.http.post("http://localhost:50644/api/user", user)
    }

    findUserById(userID): Observable<IUser> {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?id=" + userID).map((response: Response) => {
            return <IUser>response.json();
        })
        //return USERS.find(user => user.id ===userID) 
    }

    findUserByUsername(inputName): Observable<IUser> {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?username=" + inputName).map((response: Response) => {
            return <IUser>response.json();
        })
        //return USERS.find(user => user.username ===inputName)
    }

    findUserByCredentials(inputName, inputPass): Observable<IUser> {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?username=" + inputName + "&password=" + inputPass).map((response: Response) => {
            return <IUser>response.json();
        })
        //return USERS.find(user => (user.username ===inputName && user.password ===inputPass))
    }

    updateUser(userID, user): void {
        this.http.put("http://localhost:50644/api/user?id=" + userID, user)
    }

    deleteUser(userID): void {
        this.http.delete("http://localhost:50644/api/user?id=" + userID)
    }
}

var USERS: IUser[] = [
    { id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
]