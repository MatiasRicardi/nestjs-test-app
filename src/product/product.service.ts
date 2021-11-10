import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductEntity } from './product.entity';
import { ProductMapper } from './product.mapper';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {

    constructor(
        private ProductRepository: ProductRepository,
        private mapper: ProductMapper
        ){}

    async getAllProducts(): Promise<ProductDTO[]> {
        const Products: ProductEntity[] = await this.ProductRepository.getAllProducts()
        console.log(Products)
        return Products.map(Product => this.mapper.entityToDto(Product));
    }

    async getProductById(id: number): Promise<ProductDTO> {
        const Product: ProductEntity = await this.ProductRepository.getProductById(id);
        return this.mapper.entityToDto(Product);
    }

    async newProduct(ProductDTO: ProductDTO): Promise<ProductDTO> {
        const newProduct: ProductEntity = await this.ProductRepository.newProduct(ProductDTO);
        return this.mapper.entityToDto(newProduct);
    }

    async updateProduct(id: number, ProductDTO: ProductDTO): Promise<ProductDTO> {
        const updateProduct = await this.ProductRepository.updateProduct(id, ProductDTO);
        return this.mapper.entityToDto(updateProduct);
    }

    async deleteProduct(id: number): Promise<void> {
        await this.ProductRepository.deleteProduct(id);
    }

}