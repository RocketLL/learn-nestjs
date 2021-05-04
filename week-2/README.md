# NestJS Seminar Week 2

## Controllers

Controllers manage requests and responses. Created with a `class` and decorated by `@Controller`.

### Resources and Requests

Resources are class methods decorated by HTTP method decorators (`@Get`, `@Post`, etc),
Routes are passed as parameters to said decorators.

Request objects are passed as parameters to the above resources with decorators (`@Param`, `@Body`, etc).

## Providers

Providers inject dependencies.

### Service

We can define a new service with a `class` decorated by `@Injectable`. It must be specified in the module as a provider when being used.

## Modules

Modules can be used to structure applications by using `@Module`.
User-defined modules must be imported into the root app module.

## TypeScript

We use `interface`s and DTOs in Nest, following TypeScript's type checking.
First-class TypeScript is a major strength in Nest.
