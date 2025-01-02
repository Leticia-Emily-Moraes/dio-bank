import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number, balance: number) {
		super(name, accountNumber, balance);
	}

	getLoan = (amount: number): void => {
		if (this.validateStatus()) {
			this.balance += amount;
			console.log("Loan made successfully!");
		} else {
			throw new Error("Invalid account");
		}
	};
}
