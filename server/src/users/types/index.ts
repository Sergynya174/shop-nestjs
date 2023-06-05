import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Sergo' })
  username: string;

  @ApiProperty({ example: 'Sergo123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 3,
        username: 'Sergo',
        email: 'Sergo@mail.ru',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Sergo' })
  username: string;

  @ApiProperty({ example: 'Sergo@mail.ru' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 3 })
  id: number;

  @ApiProperty({ example: 'Sergo' })
  username: string;

  @ApiProperty({
    example: '$2b$10$fe9osvi3ZL46hc61NRMsaO5V38p.vH2sAAF1VBJ3gFVGCwCSi83Zm',
  })
  password: string;

  @ApiProperty({ example: 'Sergo@mail.ru' })
  email: string;

  @ApiProperty({ example: '2023-05-24T20:39:08.851Z' })
  updateAt: string;

  @ApiProperty({ example: '2023-05-24T20:39:08.851Z' })
  createAt: string;
}
