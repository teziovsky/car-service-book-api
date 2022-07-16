import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("car")
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  brand: string;

  @Column({ default: "" })
  model: string;

  @Column({ type: "timestamp", default: () => `CURRENT_TIMESTAMP` })
  createdAt: Date;
}
