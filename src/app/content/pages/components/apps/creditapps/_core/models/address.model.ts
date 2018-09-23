import { BaseModel } from './_base.model';

export class AddressModel  extends BaseModel {
	id: number;
	streetAddress: string;
	addressLine2: string;
	city: string;
	state: string;
	zipCode: string;
	addressUsage: number; // 0 = Home | 1 = Mailing |  2 = Temporary
	type: number; // 0 = Business | 1 = Residential

	clear() {
		this.streetAddress = '';
		this.addressLine2 = '';
		this.city = '';
		this.state = '';
		this.zipCode = '';
		this.addressUsage = 0;
		this.type = 1;
	}
}
