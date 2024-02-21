"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var index_1 = require("../index");
// Test case 1
assert_1.default.strictEqual(index_1.default.isEmail("user13eeie20@gmail.com"), true, 'Should be email address');
// Test case 2
assert_1.default.strictEqual(index_1.default.isEmail("user13eeie20@outlook.com"), true, 'Should be email address');
// Test case 3
assert_1.default.strictEqual(index_1.default.isEmail("user13eeie20@hotmail.co.com"), false, 'Should be email address');
