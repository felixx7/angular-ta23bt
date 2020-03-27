import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from "./core/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { TokenInterceptor } from "./core/interceptor";
import { AppRoutingModule } from "src/app/app-routing.module";
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { FrontendComponent } from './frontend/frontend.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [ 
    AppComponent,
    FrontendComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularMultiSelectModule,
    FormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
   
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      confirmText: 'Yes',
      popoverTitle: 'Are you sure want to Delete?'
    }),
    AutocompleteLibModule
  ],
  
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi : true}],
  bootstrap: [AppComponent],
})
export class AppModule { }