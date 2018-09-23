import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';
import {ProductModel} from "./product.model";
import {OfferVariationsModel} from "./offerVariations.model";

export class OfferModel extends BaseModel {
	id: number;
	bankName: string;
	offerCode: string;
	maxAvailableCredit: number;
	term: number;
	apr: number;
	offeDate: Date;
	expireDate: Date;
	stipulations: string;
	status: string;
	statusShortDesc: string;
	product: ProductModel;
	_variations:OfferVariationsModel[];

	_specs: ProductSpecificationModel[];
	_remarks: ProductRemarkModel[];

	clear() {
		this.bankName = '';
		this.offerCode = '';
		this.maxAvailableCredit = 0;
		this.term = 0;
		this.apr = 0;
		this.stipulations = '';
		this.offeDate = new Date();
		this.expireDate = new Date();
		this.stipulations = '';
		this.product = new ProductModel();
		this.statusShortDesc = '';
	}
}
