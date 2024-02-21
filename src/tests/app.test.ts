import assert from "assert";
import Validator from "../index";

// Test case 1
assert.strictEqual(Validator.isEmail("user13eeie20@gmail.com"), true, 'Should be email address');

// Test case 2
assert.strictEqual(Validator.isEmail("user13eeie20@outlook.com"), true, 'Should be email address');

// Test case 3
assert.strictEqual(Validator.isEmail("user13eeie20@hotmail.co.com"), false, 'Should be email address');

