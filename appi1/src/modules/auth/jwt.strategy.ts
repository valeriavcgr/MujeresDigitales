import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import {Strategy, ExtractJwt} from 'passport-jwt'
/**
 * JwtStrategy:
 * Estrategia de autenticación basada en JWT (JSON Web Token).
 * Esta clase se encarga de validar el token que envia el usuario en las peticiones protegidas del sistema.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
/**
* Constructor de la estrategia JWT.
* Define como se extrae y valida el token de las solicitudes.
* Configuracion:
* jwtFromRequest: Indica que el token se obtiene del encabezado de autorizacion.
* ignoreExpiration: Indica si se debe ignorar la expiracion del token.
* secretOrKey: Clave secreta utilizada para firmar y verificar el token, almacenada en una variable de entorno
 */
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrkey:process.env.JWT_SECRET_KEY
        })
    }
/**
* validate:
* Metodo que se ejecuta automáticamente despues de verificar el token
* Permite extraer la información del usuario contenida en el token JW
* @param body: Contenido del token decodificado (body)
* @returns: Objeto con los datos del usuario autenticado
*/
    async validate(body:any){
        return {userId: body.ing, email: body.email}

    }

}