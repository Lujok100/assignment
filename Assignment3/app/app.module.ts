import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteThumbnailComponent } from './websites/website-thumbnail.component' 
import { UserService} from './services/user.service'
import { Routes, RouterModule} from '@angular/router'
import {appRoutes} from './routes'
import { LoginComponent } from './components/user/login.component'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [WebsitesAppComponent, WebsitesListComponent, WebsiteThumbnailComponent ],
    bootstrap: [WebsitesAppComponent],
	providers: [UserService]

})

export class AppModule {
}



