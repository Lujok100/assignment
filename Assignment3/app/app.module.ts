import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule} from '@angular/router'

import { WebsitesAppComponent } from './websites-app.component'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteThumbnailComponent } from './websites/website-thumbnail.component' 
import { UserService} from './services/user.service'
import {appRoutes} from './routes'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, RouterModule],
    declarations: [WebsitesAppComponent, WebsitesListComponent, WebsiteThumbnailComponent, LoginComponent, ProfileComponent],
    bootstrap: [WebsitesAppComponent],
	providers: [UserService]

})

export class AppModule {
}



