import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProductDTO } from './product.dto';
import { ProductEntity } from './product.entity';
import { ProductMapper } from './product.mapper';

@Injectable()
export class ProductRepository {

    constructor(
        @InjectRepository(ProductEntity) 
              private ProductsRepository: Repository<ProductEntity>,
        private mapper: ProductMapper){}

    getAllProducts(): Promise<ProductEntity[]> {
        return this.ProductsRepository.find();
    }

    getProductById(id: number): Promise<ProductEntity> {
        return this.ProductsRepository.findOne(id);
    }

    newProduct(ProductDTO: ProductDTO): Promise<ProductEntity> {
        const newProduct = this.mapper.dtoToEntity(ProductDTO);
        return this.ProductsRepository.save(newProduct);
    }

    async updateProduct(id: number, ProductDTO: ProductDTO): Promise<ProductEntity> {
        //ProductDTO.id = id;
        const updateProduct = this.mapper.dtoToEntity(ProductDTO);
        await this.ProductsRepository.update(id, updateProduct);
        return this.ProductsRepository.findOne(id);

    }

    deleteProduct(id: number): Promise<DeleteResult> {
       return this.ProductsRepository.delete(id);
    }

}