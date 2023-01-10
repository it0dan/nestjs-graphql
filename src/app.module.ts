import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customer.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'pguser',
      password: 'pgpassword',
      database: 'sample-db-for-graphql',
      entities: ['dist/**/*.model.{js,ts}'],
      synchronize: true,
    }),
    InvoiceModule,
    CustomerModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    })
  ],
})

export class AppModule {}
