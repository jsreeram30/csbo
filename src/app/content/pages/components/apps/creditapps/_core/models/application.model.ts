import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';
import {OfferModel} from "./offer.model";
import {ProductModel} from "./product.model";
import {CustomerModel} from "./customer.model";

export class ApplicationModel extends BaseModel {
	id: number;
	bankName: string;
	offer: OfferModel;
	loanAmount: number;
	term: number;
	apr: number;
	ach: string;
	firstPaymentDate: Date;
	stipulations: string;
	status: string;
	statusShort: string;
	expireDate: Date;
	appDate: Date;
	ipAddress: string;
	product: ProductModel;
	channel: string;
	_customers: CustomerModel[];

	clear() {
		this.bankName = '';
		this.ach = '';
		this.loanAmount = 2000;
		this.term = 0;
		this.apr = 1000;
		this.appDate = new Date();
		this.firstPaymentDate = new Date();
		this.expireDate= new Date();
		this.status = '';
		this.statusShort = '';
		this.ipAddress = '';
		this.stipulations = '';
		this.channel = '';
		this.offer = new OfferModel();
		this.product = new ProductModel();
	}
}
