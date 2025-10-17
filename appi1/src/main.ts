import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({whitelist:true, transform: true}));
  
  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`App running on http://localhost:${port}`)

}
bootstrap();
//crea el proyecto
