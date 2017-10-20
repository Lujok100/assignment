import {Routes} from '@angular/router'
import {LoginComponent} from './components/user/login.component'
import {ProfileComponent} from './components/user/profile.component'

export const appRoutes = [
	{path:'login',component:LoginComponent},
	{path:'user/:uid', component: ProfileComponent},
	{path: '', component:LoginComponent}
]
