import { Module } from '@nestjs/common';
import { ProductController } from './api/controllers/product.controllers';
import { ProductServices } from './services/product.services';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductServices],
})
export class AppModule {}
