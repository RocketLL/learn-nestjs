import { Injectable } from "@nestjs/common"
import { Cat } from "./cat.interface"

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  save(cat: Cat) {
    this.cats.push(cat)
  }

  find(): Cat[] {
    return this.cats
  }
}
