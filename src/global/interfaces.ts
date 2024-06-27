interface ValidatorType{
    isEmail(email: string) : boolean;
    isValidPassword(password: string) : boolean;
}

interface PasswordType{
    hash(password : string) : string;
    verify(password : string, hash : string) : boolean
}

interface ValidatorOptions{
    minLength : number
}

export type { ValidatorType, PasswordType, ValidatorOptions };