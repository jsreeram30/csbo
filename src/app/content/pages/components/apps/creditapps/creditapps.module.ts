import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../../../partials/partials.module';
import { CreditAppsComponent } from './creditapps.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Core
import { FakeApiService } from './_core/_server/fake-api.service';
// Core => Services
import { ProductRemarksService } from './_core/services/index';
import { ProductSpecificationsService } from './_core/services/index';
import { CreditAppsService } from './_core/services/index';
import { SpecificationsService } from './_core/services/specification.service';
// Core => Utils
import { HttpUtilsService } from './_core/utils/http-utils.service';
import { TypesUtilsService } from './_core/utils/types-utils.service';
import { LayoutUtilsService } from './_core/utils/layout-utils.service';
import { InterceptService } from './_core/utils/intercept.service';
// Shared
import { ActionNotificationComponent } from './_shared/action-natification/action-notification.component';
import { DeleteEntityDialogComponent } from './_shared/delete-entity-dialog/delete-entity-dialog.component';
import { FetchEntityDialogComponent } from './_shared/fetch-entity-dialog/fetch-entity-dialog.component';
import { UpdateStatusDialogComponent } from './_shared/update-status-dialog/update-status-dialog.component';
import { AlertComponent } from './_shared/alert/alert.component';
// Applications
import { AppsListComponent } from './applications/apps-list/apps-list.component';
import { AppsEditComponent } from './applications/apps-edit/apps-edit.component';
import { RemarksListComponent } from './applications/_subs/remarks/remarks-list/remarks-list.component';
import { SpecificationsListComponent } from './applications/_subs/specifications/specifications-list/specifications-list.component';
import { SpecificationEditDialogComponent } from './applications/_subs/specifications/specification-edit/specification-edit-dialog.component';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';
import { environment } from '../../../../../../environments/environment';

const routes: Routes = [
	{
		path: '',
		component: CreditAppsComponent,
		children: [
			{
				path: '',
				redirectTo: 'creditApps',
				pathMatch: 'full'
			},
			{
				path: 'creditApps',
				component: AppsListComponent,
			},
			{
				path: 'creditApps/add',
				component: AppsEditComponent
			},
			{
				path: 'creditApps/edit',
				component: AppsEditComponent
			},
			{
				path: 'creditApps/edit/:id',
				component: AppsEditComponent
			},
		]
	}
];

@NgModule({
	imports: [
		MatDialogModule,
		CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
        MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forFeature(FakeApiService) : []
	],
	providers: [
		InterceptService,
      	{
        	provide: HTTP_INTERCEPTORS,
       	 	useClass: InterceptService,
        	multi: true
      	},
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'm-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		HttpUtilsService,
		CreditAppsService,
		ProductRemarksService,
		ProductSpecificationsService,
		SpecificationsService,
		TypesUtilsService,
		LayoutUtilsService
	],
	entryComponents: [
		ActionNotificationComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		SpecificationEditDialogComponent
	],
	declarations: [
		CreditAppsComponent,
		// Shared
		ActionNotificationComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		AlertComponent,
		// Credit Applications
		AppsListComponent,
		AppsEditComponent,
		RemarksListComponent,
		SpecificationsListComponent,
		SpecificationEditDialogComponent
	]
})
export class CreditAppsModule { }
