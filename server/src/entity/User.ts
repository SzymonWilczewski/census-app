import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
