import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductEntity } from './product.entity';
import { ProductMapper } from './product.mapper';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ProductMapper]
})
export class ProductModule {}
