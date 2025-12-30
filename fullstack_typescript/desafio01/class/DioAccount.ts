export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance;
  };

  protected validateStatus = (): boolean => {
    if (!this.status) {
      throw new Error("Conta inválida");
    }
    return true;
  };

  protected changeBalance = (value: number): void => {
    this.balance += value;
  };

  deposit = (value: number): void => {
    this.validateStatus();

    if (value <= 0) {
      throw new Error("Valor de depósito inválido");
    }

    this.changeBalance(value);
    console.log("Depósito realizado com sucesso");
  };

  withdraw = (value: number): void => {
    this.validateStatus();

    if (value <= 0) {
      throw new Error("Valor de saque inválido");
    }

    if (this.balance < value) {
      throw new Error("Saldo insuficiente");
    }

    this.changeBalance(-value);
    console.log("Saque realizado com sucesso");
  };
}
