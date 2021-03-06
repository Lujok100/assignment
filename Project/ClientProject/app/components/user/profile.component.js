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
var auth_service_1 = require("./auth.service");
var UserService_1 = require("../../services/UserService");
var router_2 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(auth, router, userService, route) {
        this.auth = auth;
        this.router = router;
        this.userService = userService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findUserById(+this.route.snapshot.params['uid']).subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.logout = function () {
        this.auth.logoutUser();
    };
    ProfileComponent.prototype.update = function (formValues) {
        var newUser = {
            id: this.user.id,
            username: formValues.username,
            password: formValues.password,
            firstName: formValues.firstName,
            lastName: formValues.lastName
        };
        this.userService.updateUser(this.user.id, newUser);
    };
    ProfileComponent.prototype.delete = function (userId) {
        this.userService.deleteUser(userId);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/profile.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, UserService_1.UserService, router_2.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map