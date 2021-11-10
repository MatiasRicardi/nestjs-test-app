import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMapper } from './product/product.mapper';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    ProductModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql10.freesqldatabase.com',
      port: 3306,
      username: 'sql10449753',
      password: 'ieScBdbH7g',
      database: 'sql10449753',
      entities: ["dist/**/*.entity{.ts,.js}"]
    })
  ],
  controllers: [AppController],
  providers: [AppService, ProductMapper],
})
export class AppModule {}
