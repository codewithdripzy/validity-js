import { PasswordType, ValidatorType } from "./global/interfaces";
declare class Validator implements ValidatorType {
    isEmail(email: string): boolean;
    isValidPassword(password: string): boolean;
}
declare class Password implements PasswordType {
    hash(password: string): string;
    verify(password: string, hash: string): boolean;
}
declare const validator: Validator;
declare const password: Validator;
export { validator, password, Validator, Password };
