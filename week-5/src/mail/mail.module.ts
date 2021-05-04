import { Module } from "@nestjs/common"
import { MailService } from "./mail.service"
import { MailerModule } from "@nestjs-modules/mailer"

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "me@luc.li",
          pass: "",
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
