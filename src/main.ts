import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder().addBearerAuth().setTitle("Car Service Book API").setVersion("3.0").build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  app.enableCors({
    origin: ["http://127.0.0.1:8010", "http://localhost:8010"],
  });

  const PORT = configService.get<number>("PORT");

  await app.listen(PORT || 3000);
}

bootstrap();
