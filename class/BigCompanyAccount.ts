import { DioAccount } from "./DioAccount";

export class BigCompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number, balance: number) {
		super(name, accountNumber, balance);
	}

	deposit = (money: number) => {
		if (this.validateStatus()) {
			this.balance += (money + 10);
			console.log("Deposit made successfully!");
		} else {
			throw new Error("Invalid account");
		}
	};
}
