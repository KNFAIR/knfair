import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    SettingsComponent
  ],
    imports: [
        CommonModule,
        RadioButtonModule,
        FormsModule,
        DropdownModule,
        TranslateModule
    ],
    exports: [
        SettingsComponent
    ]
})
export class SettingsModule { }
