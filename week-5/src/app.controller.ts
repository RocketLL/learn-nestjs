import {
  Controller,
  Get,
  Post,
  Render,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common"
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express"
import { writeFile } from "fs"
import { AppService } from "./app.service"
import { MailService } from "./mail/mail.service"

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService
  ) {}

  @Get("simple-mail")
  sendSimpleMail() {
    return this.mailService.sendSimpleMail("me@luc.li", "me@luc.li")
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
    writeFile(`uploads/${file.originalname}`, file.buffer, () => {
      console.log("file save success")
    })
  }

  @Render("index")
  @Get()
  getIndex() {
    return { message: "wow" }
  }
}
