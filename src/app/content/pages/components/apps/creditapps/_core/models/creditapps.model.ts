import { BaseModel } from './_base.model';
import {ApplicationModel} from "./application.model";

export class CreditApplicationsModel extends BaseModel {
	_apps: ApplicationModel[];

	clear() {

	}
}
