import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/autheticated.guard';
import { MakePaymentDto } from './dto/make-paymen.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @UseGuards(AuthenticatedGuard)
  @Post()
  makePayment(@Body() makePaymentDto: MakePaymentDto) {
    return this.paymentService.makePayment(makePaymentDto);
  }
}
