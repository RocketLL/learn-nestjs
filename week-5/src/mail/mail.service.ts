import { MailerService } from "@nestjs-modules/mailer"
import { Injectable } from "@nestjs/common"

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendSimpleMail(email: string, from: string) {
    return this.mailerService.sendMail({
      to: email,
      from: from,
      subject: "Hello world",
      html: `
        <html>
          <head>
             <meta charset="utf-8>
          </head>
          <body>
            <h1>Hello world!</h1>
            <p>Wow!<p>
          </body>
        </html>
      `,
    })
  }
}
