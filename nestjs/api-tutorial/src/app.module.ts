import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfessionalModule } from './professional/professional.module';
// A module is a class annotated with a @Module() decorator.
// A module can imports other modules, and inside a module we can declare providers, controllers and exports.
// Modules organize our app.!!!!
// It also imports controllers and providers.
// The idea is that we can organize our code into modules or features.
@Module({
  imports: [AuthModule, UserModule, ProfessionalModule],
})
export class AppModule {}
