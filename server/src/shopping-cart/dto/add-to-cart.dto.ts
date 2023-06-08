import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class addToCartDto {
  @ApiProperty({ example: 'Sergo' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  userId?: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly partId: number;
}
