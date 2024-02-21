import * as bcrypt from "bcrypt";
import { PasswordType, ValidatorType } from "./global/interfaces";

class Validator implements ValidatorType{
    isEmail(email : string) : boolean{
        const pattern = /([A-Za-z])\w+@((gmail)|(outlook)|(yahoo)|(hotmail)|(icloud)|(me)|(aol)|(protonmail)|(yandex)|(zoho))\.(com)/
        
        if(email.match(pattern)){
            return true;
        }

        return false;
    }

    isValidPassword(password : string) : boolean{
        const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        
        if(password.match(pattern)){
            return true;
        }

        return false;
    }
}

class Password implements PasswordType {
    hash(password : string) : string{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    }

    verify(password : string, hash : string) : boolean{
        const validity = bcrypt.compareSync(password, hash);

        return validity;
    }
}

const validator = new Validator();
const password = new Validator();


export { validator, password, Validator, Password };