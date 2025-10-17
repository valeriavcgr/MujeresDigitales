import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseLowerPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(typeof value === 'string'){
            return value.toLowerCase();
        }
        if (typeof value === "object"){
        throw new BadRequestException('El valor tiene que ser string')
        }
    return value;
    }

}