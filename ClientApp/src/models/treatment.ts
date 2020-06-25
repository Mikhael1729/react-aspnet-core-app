export class Treatment {
  id?: number;
  idCard?: string;
  medicine?: string;
  quantity?: number;
  nurse?: string;
  doctor?: string;
  registrationDate?: Date;

  constructor(treatment: Treatment) {
    this.id = treatment.id;
    this.idCard = treatment.idCard;
    this.medicine = treatment.medicine;
    this.quantity = treatment.quantity;
    this.nurse = treatment.nurse;
    this.doctor = treatment.doctor;
    this.registrationDate = treatment.registrationDate;
  }
}
