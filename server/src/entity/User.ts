import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  login!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

}