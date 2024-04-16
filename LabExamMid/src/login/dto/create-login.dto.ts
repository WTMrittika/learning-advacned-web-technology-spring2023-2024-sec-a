import{IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class CreateLoginDto {
  
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}