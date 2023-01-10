import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceModel } from 'src/invoice/invoice.model';
import { InvoiceResolver } from './invoice.resolver';
import { CustomerModule } from 'src/customers/customer.module';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceModel]),
  forwardRef(() => CustomerModule)],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService]
})
export class InvoiceModule {}