"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var create_website_component_1 = require("./websites/create-website.component");
var websites_list_resolver_service_1 = require("./websites/websites-list-resolver.service");
var platform_browser_1 = require("@angular/platform-browser");
var websites_app_component_1 = require("./websites-app.component");
var userService_1 = require("./services/userService");
var routes_1 = require("./routes");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./components/user/auth.service");
var login_component_1 = require("./components/user/login.component");
var profile_component_1 = require("./components/user/profile.component");
var register_component_1 = require("./components/user/register.component");
var jQuery_service_1 = require("./common/jQuery.service");
var simple_modal_component_1 = require("./common/simple-modal.component");
var modal_trigger_directive_1 = require("./common/modal-trigger.directive");
var websites_list_component_1 = require("./websites/websites-list.component");
var website_thumbnail_component_1 = require("./websites/website-thumbnail.component");
var website_details_component_1 = require("./websites/Website-details/website-details.component");
var navbar_component_1 = require("./nav/navbar.component");
var website_service_1 = require("./websites/shared/website.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes_1.appRoutes), forms_1.FormsModule],
        declarations: [websites_app_component_1.WebsitesAppComponent, login_component_1.LoginComponent, profile_component_1.ProfileComponent, register_component_1.RegisterComponent,
            websites_list_component_1.WebsitesListComponent,
            website_thumbnail_component_1.WebsiteThumbnailComponent,
            navbar_component_1.NavbarComponent,
            website_details_component_1.WebsiteDetailsComponent,
            create_website_component_1.CreateWebsiteComponent,
            login_component_1.LoginComponent,
            simple_modal_component_1.SimpleModalComponent,
            modal_trigger_directive_1.ModalTriggerDirective
        ],
        providers: [userService_1.UserService,
            website_service_1.WebsiteService,
            websites_list_resolver_service_1.WebsitesListResolver,
            auth_service_1.AuthService,
            { provide: jQuery_service_1.JQ_TOKEN, useValue: jQuery }
        ],
        bootstrap: [websites_app_component_1.WebsitesAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map