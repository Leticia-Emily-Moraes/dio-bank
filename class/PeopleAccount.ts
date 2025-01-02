import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, balance: number){
    super(name, accountNumber, balance)
    this.doc_id = doc_id
  }
}