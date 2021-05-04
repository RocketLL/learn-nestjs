import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common"
import { Cat } from "./cat.interface"
import { CreateCatDto } from "./cats.dto"
import { CatsService } from "./cats.service"

@Controller("animal")
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get("cats/:name/:age/:breed")
  findAll(@Param() param): string {
    const cat: Cat = new CreateCatDto()
    cat.name = param.name
    cat.age = param.age
    cat.breed = param.breed

    this.catService.save(param)
    return `all cats ${param.name}`
  }

  @Post("cats")
  @HttpCode(204)
  create(@Body() cat: CreateCatDto): string {
    return `create cats ${cat.name}`
  }

  @Patch("cats")
  update(): string {
    return "update cats"
  }
}
