import bcrypt from "bcrypt";

class Validator{
    static isEmail(email : string) : boolean{
        const pattern = /([A-Za-z])\w+@((gmail)|(outlook)|(yahoo)|(hotmail)|(icloud)|(me)|(aol)|(protonmail)|(yandex)|(zoho))\.(com)/
        
        if(email.match(pattern)){
            return true;
        }

        return false;
    }

    static isValidPassword(password : string) : boolean{
        const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
        
        if(password.match(pattern)){
            return true;
        }

        return false;
    }
}

class Password{
    static hash(password : string) : string{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    }

    static verify(password : string, hash : string) : boolean{
        const validity = bcrypt.compareSync(password, hash);

        return validity;
    }
}

export default Validator;
export { Password };