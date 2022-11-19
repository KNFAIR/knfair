import {Component, OnInit} from '@angular/core';
import {AppBreadcrumbService} from '../../../../core/service/app.breadcrumb.service';
import {AppComponent} from '../../../../core/components/app/app.component';
import {SettingsService} from '../../service/settings.service';
import {TranslationService} from '../../../../core/service/translation.service';
import {TRANSLATE_KEY} from '../../../../core/model/translate-key';
import {LANGUAGE} from '../../../../core/model/language';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    readonly TRANSLATE_KEY = TRANSLATE_KEY;

    languages: any[] = [
        {id: LANGUAGE.PL, name: 'Polski'},
        {id: LANGUAGE.EN, name: 'English'},
    ];
    selectedLanguage: any = this.languages[0];

    // tslint:disable-next-line:max-line-length
    constructor(public app: AppComponent, private breadcrumbService: AppBreadcrumbService, private settingsService: SettingsService, private transactionService: TranslationService) {
    }

    ngOnInit(): void {
        this.selectedLanguage = this._loadSelectedLanguage();
        this.breadcrumbService.addItem({
            label: 'Settings', routerLink: [`/settings`]
        });
    }

    changeColorScheme(theme: string) {
        this.settingsService.saveColorScheme(theme)
            .subscribe(() => {
                this.app.changeColorScheme(theme);
            });
    }

    changeLanguage(event: any) {
        console.log(event.value.id);
        this.transactionService.changeLanguage(event.value.id);
    }

    private _loadSelectedLanguage() {
        const lang = localStorage.getItem(this.transactionService.LOCAL_STORAGE_LANGUAGE_KEY);
        return this.languages.find(item => item.id === lang);
    }
}
