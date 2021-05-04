# NestJS Seminar Week 5

## Mailing

We can send mail fron a NestJS server by using [`@nestjs-modules/mailer`](https://github.com/nest-modules/mailer).

First, we import `MailerModule` into a module:

```ts
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.mailhost.com",
        port: 587,
        auth: {
          user: "SMTP ID",
          pass: "SMTP PW"
        }
      }
    })
  ],
  ...
})
...
```

Then we create a service:

```ts
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(to: string, from: string) {
    return this.mailerService.sendMail({
      to: to,
      from: from,
      subject: `Hello world!`,
      html: `...`,
    })
  }
}
```

Of course, we have to edit our app module afterwards.

Finally we can use our service in a controller:

```ts
@Post("mail")
sendMail() {
  return this.mailService.sendmail(
    "to@example.com",
    "from@example.com"
  )
}
```

A lot of mail hosts now disable less secure SMTP ID/PW authorization, so additional configuration with the mail host may be required.

## File Uploads

NestJS can handle HTTP file uploads. `@types/multer` should be installed for relevant types.

Handling file uploads is as simple as using the `FileInterceptor` interceptor and `UploadedFile` decorator:

```ts
@Post("upload")
@UseInterceptors(FileInterceptor("file"))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file)
}
```

Afterwards, we are free to manipulate `file` however we want.

To handle multiple files, `FilesInterceptor` can be used.

## MVC

We can render HTML views directly from NestJS.
First, we must edit the bootstrapping function `bootstrap` in `main.ts`:

```ts
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, "..", "public"))
  app.setBaseViewsDir(join(__dirname, "..", "views"))
  app.setViewEngine("hbs")

  await app.listen(3000)
}
```

Note here that we use `public` as the directory for static assets, `views` as the directory for view files, and [`hbs` (handlebars)](https://handlebarsjs.com) as the templating engine for views.

We populate `views` with the templates that we want (`index.hbs`) in this case:

```hbs
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>App</title>
  </head>
  <body>
    <h1>{{ message }}</h1>
  </body>
</html>
```

And finally, edit our controller:

```ts
@Get()
@Render("index")
root() {
  return { message: "Hello world!" }
}
```
