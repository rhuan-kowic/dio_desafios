import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    this.validateStatus();

    if (value <= 0) {
      throw new Error("Valor de depósito inválido");
    }

    this.changeBalance(value + 10);
    console.log("Depósito com bônus realizado");
  };
}
