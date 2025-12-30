import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    this.validateStatus();

    if (value <= 0) {
      throw new Error("Valor de empréstimo inválido");
    }

    this.changeBalance(value);
    console.log("Empréstimo realizado com sucesso");
  };
}
