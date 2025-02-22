import { Injectable } from "@nestjs/common";
@Injectable({})
export class AuthSercices{
    signIn(){
        return {"masg":"your logged in !"}
    }

    signUP(){
        return{"masag":"your signed up"}
    }
}