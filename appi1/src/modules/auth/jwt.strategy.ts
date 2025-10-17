import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import {Strategy, ExtractJwt} from 'passport-jwt'
/**
* JwtStrategy:Service del jwt
* Estrategia de autenticación basada en JWT (JSON Web Token)
* Esta clase se encarga de validar el token que envia el usuario en las peticiones protegidas del sistema
* Constructor de la estrategia JWT.
* Define como se extrae y valida el token de las solicitudes
* jwtFromRequest: Indica que el token se obtiene del encabezado de autorizacion
* ignoreExpiration: Indica si se debe ignorar la expiracion del token
* secretOrKey: Clave secreta utilizada para firmar y verificar el token, almacenada en una variable de entorno
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(private configService: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // direccion ip
            ignoreExpiration:false,
            secretOrKey: configService.get<string>('JWT_SECRET_KEY')
        })
    }
/**
* validate:
* Metodo que se ejecuta automáticamente despues de verificar el token
* Permite extraer la información del usuario contenida en el token
* @param body: Contenido del token decodificado (body)
* @returns: Objeto con los datos del usuario autenticado
*/
    async validate(body:any){
        return {userId: body.ing, email: body.email}

    }

}