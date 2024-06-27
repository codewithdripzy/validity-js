import * as bcrypt from "bcrypt";
import { PasswordType, ValidatorOptions, ValidatorType } from "./global/interfaces";

/**
 * @module auth-validify
 * @description A comprehensive validation library for Node.js applications.
 */

/**
 * @typedef {Object} ValidatorOptions
 * @property {number} [minLength=8] - Minimum password length (default: 8).
 * @property {boolean} [requireSpecial=true] - Whether to require at least one special character (default: true).
 * @property {string[]} [allowedEmailDomains] - Array of allowed email domain names (optional).
 */

/**
 * @class Validator
 */
class Validator implements ValidatorType{
    /**
     * Validates an email address.
     *
     * @param {string} email - The email address to validate.
     * @param {ValidatorOptions} [options] - Customization options.
     * @returns {boolean} True if the email is valid, false otherwise.
     *
     * @throws {TypeError} If the email is not a string.
     * @throws {InvalidEmailError} If the email format is invalid.
     */
    isEmail(email : string) : boolean{
        const pattern = /([A-Za-z])\w+@((gmail)|(outlook)|(yahoo)|(hotmail)|(icloud)|(me)|(aol)|(protonmail)|(yandex)|(zoho))\.(com)/
        
        if(email.match(pattern)){
            return true;
        }

        return false;
    }

     /**
     * Validates a password.
     *
     * @param {string} password - The password to validate.
     * @param {ValidatorOptions} [options] - Customization options.
     * @returns {boolean} True if the password is valid, false otherwise.
     *
     * @throws {TypeError} If the password is not a string.
     * @throws {InvalidPasswordError} If the password format is invalid.
     */
    isValidPassword(password : string, options: ValidatorOptions = { minLength: 8 }): boolean {
        const { minLength } = options;
        const pattern = new RegExp(`^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{${minLength},16}$`);
    
        return pattern.test(password);
    }
    

    isValidPhoneNumber(phoneNumber : string) : boolean{
        const pattern = /^(\+?[\d{1,3}\s]?-\?)?\(?([0-9]{2,5})\)?[- \.]?([0-9]{3})[- \.]?([0-9]{4})$/
        
        if(phoneNumber.match(pattern)){
            return true;
        }

        return false;
    }
}

/**
 * @class Password
 */
class Password implements PasswordType {
    /**
     * Hashes a password securely using bcrypt.
     *
     * @param {string} password - The password to hash.
     * @returns {Promise<string>} A promise that resolves with the hashed password.
     *
     * @throws {TypeError} If the password is not a string.
     */
    hash(password : string) : string{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    }

    /**
     * Verifies a password against a stored hash.
     *
     * @param {string} password - The password to verify.
     * @param {string} hash - The stored password hash.
     * @returns {Promise<boolean>} A promise that resolves with true if the password matches the hash, false otherwise.
     *
     * @throws {TypeError} If either `password` or `hash` is not a string.
     */
    verify(password : string, hash : string) : boolean{
        const validity = bcrypt.compareSync(password, hash);

        return validity;
    }
}

const validator = new Validator();
const password = new Validator();


export { validator, password, Validator, Password };