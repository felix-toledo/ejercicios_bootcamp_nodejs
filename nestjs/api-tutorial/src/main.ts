import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Controllers are responsible of handling incoming requests and returning responses to the client.
// Providers are plain classes annotated with an @Injectable() decorator.
// Providers can be injected into constructors of controllers or other providers using Dependency Injection.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
