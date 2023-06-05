import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Sergo' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'Sergo123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'Sergo@mail.ru' })
  @IsNotEmpty()
  readonly email: string;
}
