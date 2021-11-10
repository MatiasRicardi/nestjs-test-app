import { Injectable } from "@nestjs/common";
import { ProductDTO } from "./product.dto";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductMapper {

    dtoToEntity(ProductDTO: ProductDTO): ProductEntity {
        return new ProductEntity(ProductDTO.id, ProductDTO.name, ProductDTO.description, ProductDTO.dateCreated);
    }

    entityToDto(ProductEntity: ProductEntity): ProductDTO {
        return new ProductDTO(ProductEntity.id, ProductEntity.name, ProductEntity.description, ProductEntity.dateCreated);
    }

}