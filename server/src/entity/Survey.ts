import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum MaritalStatus {
  SINGLE = "single",
  MARRIED = "married",
  WIDOWED = "widowed",
  DIVORCED = "divorced",
  SEPARATED = "separated",
}

export enum Education {
  NONE = "none", // zadne
  PRIMARY = "primary", // podstawowe
  LOWER_SECONDARY = "lowerSecondary", // gimnazjalne
  VOCATIONAL = "vocational", // zawodowe
  SECONDARY = "secondary", // srednie
  HIGHER = "higher", // wyzsze
}

export enum Sex {
  NONE = "none",
  MALE = "male",
  FEMALE = "female",
}

export enum ProfessionalActivity {
  EMPLOYED = "employed",
  UNEMPLOYED = "unemployed",
  INACTIVE = "inactive",
}

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: Sex,
    default: Sex.NONE,
  })
  sex!: Sex;

  @Column()
  pesel!: string;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  dateOfBirth!: Date;

  @Column()
  countryOfBirth!: string;

  @Column({
    type: "enum",
    enum: MaritalStatus,
    default: MaritalStatus.SINGLE,
  })
  maritalStatus!: MaritalStatus;

  @Column({
    type: "enum",
    enum: Education,
    default: Education.NONE,
  })
  education!: Education;

  @Column()
  address!: string;

  @Column()
  voivodeship!: string;

  @Column()
  children!: number;

  @Column({
    type: "enum",
    enum: ProfessionalActivity,
    default: ProfessionalActivity.UNEMPLOYED,
  })
  professionalActiviy!: ProfessionalActivity;

  @Column()
  isDisabled!: boolean;

  @Column()
  earnings!: number;

  @Column()
  religion!: string;

  @Column()
  industry!: string;

  @Column()
  peopleInApartment!: number;
}