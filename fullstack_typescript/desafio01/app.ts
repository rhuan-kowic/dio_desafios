import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { BonusAccount } from "./class/BonusAccount";

// =======================
// Conta Pessoa Física
// =======================
const peopleAccount = new PeopleAccount(123456789, "Rhuan", 1);

peopleAccount.deposit(100);
peopleAccount.withdraw(50);

console.log("Saldo PeopleAccount:", peopleAccount.getBalance());

// =======================
// Conta Pessoa Jurídica
// =======================
const companyAccount = new CompanyAccount("Empresa X", 2);

companyAccount.deposit(1000);
companyAccount.getLoan(500);
companyAccount.withdraw(300);

console.log("Saldo CompanyAccount:", companyAccount.getBalance());

// =======================
// Conta com bônus no depósito
// =======================
const bonusAccount = new BonusAccount("Conta Bônus", 3);

bonusAccount.deposit(100); // deposita 110
bonusAccount.withdraw(50);

console.log("Saldo BonusAccount:", bonusAccount.getBalance());
