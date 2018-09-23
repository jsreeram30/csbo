import { ConfigModel } from '../core/interfaces/config';

export class PagesConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			'/': {
				page: {
					title: 'Dashboard',
					desc: 'Latest updates and statistic charts'
				}
			},

			forms: {
				page: { title: 'Forms', desc: '' }
			},
			mail: {
				page: { title: 'Mail', desc: 'Mail' }
			},
			ecommerce: {
				customers: {
					page: { title: 'Customers', desc: '' }
				},
				products: {
					edit: {
						page: { title: 'Edit product', desc: '' }
					},
					add: {
						page: { title: 'Create product', desc: '' }
					}
				},
				orders: {
					page: { title: 'Orders', desc: '' }
				}
			},
			'user-management': {
				page: { title: 'User Management', desc: '' }
			},
			'audit-log': {
				page: { title: 'Audit Log', desc: '' }
			},
			header: {
				actions: {
					page: { title: 'Actions', desc: 'actions example page' }
				}
			},
			profile: {
				page: { title: 'User Profile', desc: '' }
			},
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			}
		};
	}
}
