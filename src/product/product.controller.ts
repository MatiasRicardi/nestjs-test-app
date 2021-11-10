import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('Products')
export class ProductController {

    constructor(private ProductsService: ProductService){}

    @Get()
    async getAllProducts(): Promise<ProductDTO[]> {
        return await this.ProductsService.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number): Promise<ProductDTO> {
        return await this.ProductsService.getProductById(id);
    }

    @Post()
    async newProduct(@Body() Product: ProductDTO): Promise<ProductDTO> {
        return await this.ProductsService.newProduct(Product);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() Product: ProductDTO): Promise<ProductDTO> {
        return await this.ProductsService.updateProduct(id, Product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number): Promise<void> {
        return await this.ProductsService.deleteProduct(id);
    }

}