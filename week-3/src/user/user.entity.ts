import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Board } from "../board/board.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  /**
   * Database Relationship
   */

  // @ManyToMany(() => Board, board => board.users, {eager: false})
  // boards: Board[];
}
