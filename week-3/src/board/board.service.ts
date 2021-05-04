import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Board } from "./board.entity"
import { Repository } from "typeorm"
import { BoardDto } from "./board.dto"
import { UserService } from "../user/user.service"

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
    private readonly userService: UserService
  ) {}

  find() {
    // return this.boardRepo.find({ relations: ["user"] });
    return this.boardRepo.find()
  }

  findOne(id: string) {
    return this.boardRepo.findOne({ id: id })
  }

  async save(dto: BoardDto) {
    // const existUser = await this.userService.findOne(dto.user_id);

    return this.boardRepo.save({
      title: dto.title,
      content: dto.content,
      views: 0,
      // user: existUser
    })
  }

  update(id: string, dto: BoardDto) {
    return this.boardRepo.update(
      { id: id },
      {
        title: dto.title,
        content: dto.content,
      }
    )
  }

  delete(id: string) {
    return this.boardRepo.delete({ id: id })
  }
}
