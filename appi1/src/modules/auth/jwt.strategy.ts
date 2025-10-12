import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import {Strategy, ExtractJwt} from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrkey:process.env.JWT_SECRET_KEY
        })
    }
//para saber si ese token es verdad o no
    async validate(body:any){
        return {userId: body.ing, email: body.email}

    }

}