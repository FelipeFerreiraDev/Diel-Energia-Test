import { User } from '@modules/accounts/infra/typeorm/entities/User'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('tasks')
class Task {
  @PrimaryColumn()
    id: string

  @Column()
    title: string

  @Column()
    description: string

  @Column()
    date: Date

  @Column()
    runtime: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
    user: User

  @Column()
    user_id: string

  @CreateDateColumn()
    created_at: Date

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Task }
