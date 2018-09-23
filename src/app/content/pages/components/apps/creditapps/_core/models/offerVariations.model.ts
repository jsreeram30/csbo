import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';
import {ProductModel} from "./product.model";

export class OfferVariationsModel extends BaseModel {
	id: number;
	term: number;
	apr: number;
	ach: number; // 0 = Non-Ach  1 = ACH

	clear() {

		this.term = 0;
		this.apr = 0;
		this.ach = 0;
	}
}
