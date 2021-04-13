import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
  ADMIN = "admin",
  POLLSTER = "pollster",
}

@Entity({ name: "app_user" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  login!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.ADMIN,
  })
  role!: Role;
}
