import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
/*
Creqamos el guardian
*/
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}