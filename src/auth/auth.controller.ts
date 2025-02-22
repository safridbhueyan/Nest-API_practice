import { Controller, Post } from "@nestjs/common";
import { AuthSercices } from "./auth.services";

@Controller("auth")
export class AuthController{
 constructor(private authservice : AuthSercices){}

@Post("signin")

signIn(){
    return this.authservice.signIn();
}

@Post("signup")
signUP(){
    return this.authservice.signUP();
}
} 