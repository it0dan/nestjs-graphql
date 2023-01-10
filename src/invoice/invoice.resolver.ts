import { InvoiceService } from './invoice.service';
import { Resolver, Query, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateInvoiceDTO } from './invoice.dto';
import { InvoiceModel } from 'src/invoice/invoice.model';
import { CustomerService } from 'src/customers/customer.service';
import { CustomerModel } from 'src/customers/customer.model';

@Resolver(of => InvoiceModel)
export class InvoiceResolver {
  constructor(
    @Inject(InvoiceService) private invoiceService: InvoiceService,
    @Inject(CustomerService) private customerService: CustomerService
  ) { }
  
  @Query(returns => InvoiceModel)
  async invoice(@Args('id') id: string): Promise<InvoiceModel> {
    return await this.invoiceService.findOne(id);
  }

  @ResolveField(returns => CustomerModel)
  async customer(@Parent() invoice) {
    const { customer } = invoice;
    return this.customerService.findOne(customer);
  }

  @Query(returns => [InvoiceModel])
  async invoices(): Promise<InvoiceModel[]> {
    return await this.invoiceService.findAll();
  }

  @Mutation(returns => InvoiceModel)
  async createInvoice(
    @Args('invoice') invoice: CreateInvoiceDTO,
  ): Promise<InvoiceModel> {
    return await this.invoiceService.create(invoice)
  }
}