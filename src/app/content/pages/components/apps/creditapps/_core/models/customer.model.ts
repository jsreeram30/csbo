import { BaseModel } from './_base.model';
import {AddressModel} from "./address.model";

export class CustomerModel  extends BaseModel {
	id: number;
	role: string   // Primary, Secondary, etc
	firstName: string;
	lastName: string;
	ssn: string;
	citizenship: string;
	email: string;
	contact: string;
	userName: string;
	status: number; // 0 = Active | 1 = Suspended | Pending = 2
	dateOfBbirth: string;
	dob: Date;
	type: number; // 0 = Business | 1 = Individual
	address: AddressModel;
	militaryActiveDutyIndicator: number; // 0 = Non - Military | 1 = Active | 2 = Retired
	clear() {
		this.dob = new Date();
		this.firstName = '';
		this.role = '';
		this.lastName = '';
		this.email = '';
		this.contact = '';
		this.userName = '';
		this.dateOfBbirth = '';
		this.type = 1;
		this.status = 1;
		this.militaryActiveDutyIndicator = 0;
		this.ssn = '';
		this.citizenship = '';
		this.address= new AddressModel();
	}
}
