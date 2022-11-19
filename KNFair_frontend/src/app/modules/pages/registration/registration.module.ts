import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationLandlordComponent} from './components/registration-landlord/registration-landlord.component';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { RegistrationMainComponent } from './components/registration-main/registration-main.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         component: RegistrationMainComponent,
//         children: [
//
//         ]
//     }
// ];



@NgModule({
  declarations: [
    RegistrationLandlordComponent,
    RegistrationMainComponent
  ],
    imports: [
        // RouterModule.forChild(routes),
        CommonModule,
        TranslateModule,
        FormsModule,
        ImageModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        FontAwesomeModule,

    ],
   exports: [
       RegistrationMainComponent,
       RegistrationLandlordComponent
   ]
})
export class RegistrationModule { }
