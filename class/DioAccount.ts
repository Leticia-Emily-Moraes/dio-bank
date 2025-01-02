export abstract class DioAccount {
	private name: string;
	private readonly accountNumber: number;
	balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number, balance: number) {
		this.name = name;
		this.balance = balance;
		this.accountNumber = accountNumber;
	}

	setName = (name: string): void => {
		this.name = name;
		console.log("Name changed successfully!");
	};

	getName = (): string => {
		return this.name;
	};

	deposit = (money: number) => {
		if (this.validateStatus()) {
			this.balance += money;
			console.log("Deposit made successfully!");
		} else {
			throw new Error("Invalid account");
		}
	};

	withdraw = (money: number): void => {
		if (this.validateStatus()) {
			if (money <= this.balance) {
				this.balance -= money;
				console.log("withdrawal made successfully!");
			} else {
				console.log("insufficient balance");
			}
		} else {
			throw new Error("Invalid account");
		}
	};

	getBalance = (): void => {
		console.log(this.balance);
	};

	public validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		} else {
			throw new Error("Invalid account");
		}
	};
}
