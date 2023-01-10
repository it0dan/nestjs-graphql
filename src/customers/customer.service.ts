import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerModel } from "src/customers/customer.model";
import { Repository } from "typeorm";
import { CustomerDTO } from "./customer.dto";

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerModel)
        private customerRepository: Repository<CustomerModel>,
      ) {}

      create(details: CustomerDTO): Promise<CustomerModel>{
          return this.customerRepository.save(details);
      }
    
      findAll(): Promise<CustomerModel[]> {
        return this.customerRepository.find();
      }
    
      findOne(id: string): Promise<CustomerModel> {
        return this.customerRepository.findOneByOrFail({id: id});
      }
}