import { Module } from '@nestjs/common';

// A module is a class annotated with a @Module() decorator.
// A module can imports other modules, and inside a module we can declare providers, controllers and exports.
// Modules organize our app.
@Module({
  imports: [],
})
export class AppModule {}
