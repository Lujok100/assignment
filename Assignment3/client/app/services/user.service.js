"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.findUserById = function (id) {
        return USERS.find(function (user) { return user.id === id; });
    };
    UserService.prototype.createUser = function (username, password) {
        USERS.push(username, password);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return USERS.find(function (user) { return user.userName === username; });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return USERS.find(function (user) { return user.userName === username && user.password === password; });
    };
    UserService.prototype.updateUser = function (userID, user) {
        var temp = USERS.findIndex(function (user) { return user.id === userID; });
        USERS.splice(temp, 1, user);
    };
    UserService.prototype.deleteUser = function (userID) {
        var temp = USERS.findIndex(function (user) { return user.id === userID; });
        USERS.splice(temp, 1);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
var USERS = [
    { id: "123", userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: "234", userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: "345", userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: "456", userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];
//# sourceMappingURL=user.service.js.map