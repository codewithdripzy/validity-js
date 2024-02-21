"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = exports.Validator = exports.password = exports.validator = void 0;
var bcrypt = require("bcrypt");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.isEmail = function (email) {
        var pattern = /([A-Za-z])\w+@((gmail)|(outlook)|(yahoo)|(hotmail)|(icloud)|(me)|(aol)|(protonmail)|(yandex)|(zoho))\.(com)/;
        if (email.match(pattern)) {
            return true;
        }
        return false;
    };
    Validator.prototype.isValidPassword = function (password) {
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (password.match(pattern)) {
            return true;
        }
        return false;
    };
    return Validator;
}());
exports.Validator = Validator;
var Password = /** @class */ (function () {
    function Password() {
    }
    Password.prototype.hash = function (password) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    };
    Password.prototype.verify = function (password, hash) {
        var validity = bcrypt.compareSync(password, hash);
        return validity;
    };
    return Password;
}());
exports.Password = Password;
var validator = new Validator();
exports.validator = validator;
var password = new Validator();
exports.password = password;
