import { ApiProperty } from "@nestjs/swagger";

export class ProductDTO {
    @ApiProperty()
    readonly id?: number;

    @ApiProperty()
    readonly name: string;
    
    @ApiProperty()
    readonly description: string;

    @ApiProperty({name:"dt_created"})
    readonly dateCreated: Date;

    constructor(id: number, name: string, description: string, dateCreated: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
    }
}