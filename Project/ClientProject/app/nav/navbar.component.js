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
var auth_service_1 = require("../components/user/auth.service");
var website_service_1 = require("../websites/shared/website.service");
var NavbarComponent = (function () {
    function NavbarComponent(auth, websiteService) {
        this.auth = auth;
        this.websiteService = websiteService;
    }
    NavbarComponent.prototype.searchBooks = function (searchTermForm) {
        var _this = this;
        this.websiteService.getSummaryByIsbn(searchTermForm.searchTerm).subscribe(function (book) {
            _this.foundBook = book;
        });
    };
    NavbarComponent.prototype.searchEmployees = function (searchTermForm) {
        var _this = this;
        this.websiteService.searchEmployees(searchTermForm.searchTerm).subscribe(function (employees) {
            _this.foundEmployees = employees;
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: ["\n        .nav.navbar-nav {font-size:15px;}\n        #searchForm {margin-right:100px;}\n        @media (max-width: 1200px){ #searchForm {display:none}}\n        li > a.active {color: #F97924;}\n        "]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, website_service_1.WebsiteService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map