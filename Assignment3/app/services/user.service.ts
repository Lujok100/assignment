import { Injectable } from '@angular/core'


@Injectable()
export class UserService {
    findUserById() :IUser {
       return USER.find(user => user.id ===id)

    
        }
	createUser() :IUser	{
		createUser(users: string)
	}
    findUserByUsername() :IUser {
		return USER.find(user => user.name ===name)
	}
    
	findUserByCredentials() :IUser{
		return USER.find(user => user.credentials ===credentials)
	}
	
	updateUser() :IUser{
			return USER.update(user => user.id ===id)
	}
	
	deleteUser() :IUser{
		return USER.delete(user => user.id ===id)
		
	}
	
	
   const USERS:IUser  = 
        
}

 [
{id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
{id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
{id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
{id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
]