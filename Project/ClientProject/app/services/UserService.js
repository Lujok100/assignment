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
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.createUser = function (username, password, firstName, lastName) {
        var bool = 0;
        var temp = 1;
        var user = {
            id: 0,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        this.http.post("http://localhost:50644/api/user", user);
    };
    UserService.prototype.findUserById = function (userID) {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?id=" + userID).map(function (response) {
            return response.json();
        });
        //return USERS.find(user => user.id ===userID) 
    };
    UserService.prototype.findUserByUsername = function (inputName) {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?username=" + inputName).map(function (response) {
            return response.json();
        });
        //return USERS.find(user => user.username ===inputName)
    };
    UserService.prototype.findUserByCredentials = function (inputName, inputPass) {
        return this.http.get("http://localhost:50644/api/user/FindUserByCredentials?username=" + inputName + "&password=" + inputPass).map(function (response) {
            return response.json();
        });
        //return USERS.find(user => (user.username ===inputName && user.password ===inputPass))
    };
    UserService.prototype.updateUser = function (userID, user) {
        this.http.put("http://localhost:50644/api/user?id=" + userID, user);
    };
    UserService.prototype.deleteUser = function (userID) {
        this.http.delete("http://localhost:50644/api/user?id=" + userID);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
var USERS = [
    { id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];
//# sourceMappingURL=UserService.js.map