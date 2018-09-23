import { BaseModel } from './_base.model';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';

export class ProductModel extends BaseModel {
	id: number;
	product: string;
	productType: string;
	loanPurpose: string;
	description: string;

	clear() {
		this.product = '';
		this.productType = '';
		this.loanPurpose = '';
		this.loanPurpose = '';
	}
}
