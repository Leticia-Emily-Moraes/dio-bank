import { BigCompanyAccount } from "./class/BigCompanyAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Lele", 10, 100);
console.log("Initial PeopleAccount:", peopleAccount);

peopleAccount.deposit(20);
console.log("After deposit PeopleAccount:", peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20, 200);
console.log("Initial CompanyAccount:", companyAccount);

companyAccount.deposit(300);
console.log("After deposit CompanyAccount:", companyAccount);

companyAccount.getLoan(500);
console.log("After loan CompanyAccount:", companyAccount);

const bigCompanyAccount = new BigCompanyAccount("Big DIO", 12345, 500);

console.log("Initial Balance:", bigCompanyAccount);
bigCompanyAccount.deposit(100);

console.log("After Deposit:", bigCompanyAccount);
