import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { ProductModel } from '../models/product.model';
import { QueryParamsModel } from '../models/query-models/query-params.model';
import { QueryResultsModel } from '../models/query-models/query-results.model';

const API_PRODUCTS_URL = 'api/products';
// Real REST API
@Injectable()
export class CreditAppsService {
	lastFilter$: BehaviorSubject<QueryParamsModel> = new BehaviorSubject(new QueryParamsModel({}, 'asc', '', 0, 10));

	constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) { }

	// CREATE =>  POST: add a new product to the server
	createApplication(product): Observable<ProductModel> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.post<ProductModel>(API_PRODUCTS_URL, product, { headers: httpHeaders });
	}

	// READ
	getAllApplications(): Observable<ProductModel[]> {
		return this.http.get<ProductModel[]>(API_PRODUCTS_URL);
	}

	getApplicationById(productId: number): Observable<ProductModel> {
		return this.http.get<ProductModel>(API_PRODUCTS_URL + `/${productId}`);
	}

	// Server should return filtered/sorted result
	findApplications(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
			// Note: Add headers if needed (tokens/bearer)
			const httpHeaders = this.httpUtils.getHTTPHeaders();
			const httpParams = this.httpUtils.getFindHTTPParams(queryParams);

			const url = API_PRODUCTS_URL + '/find';
			return this.http.get<QueryResultsModel>(url, {
				headers: httpHeaders,
				params:  httpParams
			});
	}

	// UPDATE => PUT: update the application on the server
	updateApplication(product: ProductModel): Observable<any> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_PRODUCTS_URL, product, { headers: httpHeaders });
	}

	// UPDATE Status
	// Comment this when you start work with real server
	// This code imitates server calls
	updateStatusForAppication(products: ProductModel[], status: number): Observable<any> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = {
			productsForUpdate: products,
			newStatus: status
		};
		const url = API_PRODUCTS_URL + '/updateStatus';
		return this.http.put(url, body, { headers: httpHeaders });
	}

	// DELETE => delete the product from the server
	deleteApplication(productId: number): Observable<ProductModel> {
		const url = `${API_PRODUCTS_URL}/${productId}`;
		return this.http.delete<ProductModel>(url);
	}

	deleteApplications(ids: number[] = []): Observable<any> {
		const url = API_PRODUCTS_URL + '/delete';
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = { prdocutIdsForDelete: ids };
		return this.http.put<QueryResultsModel>(url, body, { headers: httpHeaders} );
	}
}
