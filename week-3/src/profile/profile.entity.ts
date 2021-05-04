import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "../user/user.entity"

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  gender: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @Column()
  user_id: string
}
