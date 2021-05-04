import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { User } from "../user/user.entity"

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  title: string

  @Column("text")
  content: string

  @Column()
  views: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  /**
   * Database Relationship
   */
  //
  // @ManyToOne(() => User, user => user.boards)
  // user: User;
}
