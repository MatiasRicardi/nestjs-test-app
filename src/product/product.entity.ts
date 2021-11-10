import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({name:"test_table"})
export class ProductEntity   {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({name : "dt_created"})
  dateCreated: Date;

  constructor(id: number, name: string, description: string, dateCreated: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateCreated = dateCreated;
}
}