import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { ExcludeUrls } from '@/config/ExcludeUrl';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CoreModule, CatsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(...ExcludeUrls)
      .forRoutes('/');
  }
}
