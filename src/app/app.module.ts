import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestore } from "angularfire2/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ContainersComponent } from './containers/containers.component';
import { SignupComponent } from './containers/signup/signup.component';
import { LoginComponent } from './containers/login/login.component';
import { AdminComponent } from './containers/admin/admin.component';
import { EmployeeComponent } from './containers/employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AutocompleteLocationComponent } from './components/autocomplete-location/autocomplete-location.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SearchDropDownComponent } from './components/search-drop-down/search-drop-down.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AccordianComponent } from './components/accordian/accordian.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './components/alert/alert.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ContainersComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    DropDownComponent,
    AutocompleteLocationComponent,
    SearchDropDownComponent,
    ModalComponent,
    AccordianComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AngularMultiSelectModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
