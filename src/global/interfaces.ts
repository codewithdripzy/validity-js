interface ValidatorType{
    isEmail(email: string) : boolean;
    isValidPassword(password: string) : boolean;
}

interface PasswordType{
    hash(password : string) : string;
    verify(password : string, hash : string) : boolean
}

interface AuthenticatorType{

}
interface ValidatorOptions{
    minLength : number
}

// interface FieldsType{
//     email : EmailField;
//     password : PasswordField;
//     tel : TelephoneField;
// }


export type { ValidatorType, PasswordType, ValidatorOptions, AuthenticatorType };