import { Injectable } from '@angular/core'

import {IUser} from '../components/user/user.model'
@Injectable()
export class UserService {
    findUserById(id) :IUser {
       return USERS.find(user => user.id ===id)

    
        }
    createUser(username, password, firstName, lastName: IUser) {
       USERS.push( username, password, firstName, lastName)
		}
    findUserByUsername(username) :IUser {
		return USERS.find(user => user.userName ===username)
	}
    
	findUserByCredentials(username, password) :IUser{
		return USERS.find(user => user.userName   ===username && user.password ===password)
	}
	
	updateUser(userID, user) :void {
        var temp = USERS.findIndex(user => user.id === userID)
        USERS.splice(temp, 1, user)
	}
	
    deleteUser(userID) {
        var temp = USERS.findIndex(user => user.id === userID)
        USERS.splice(temp, 1)
		
	}
	
	
   
        
}
const USERS: IUser[] = 
 [
{id: "123", userName: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
{id: "234", userName: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
{id: "345", userName: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
{id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
]