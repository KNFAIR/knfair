import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGE} from '../model/language';
import {TRANSLATE_PL} from '../model/translation-pl';
import {TRANSLATE_EN} from '../model/translation-en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

    readonly LOCAL_STORAGE_LANGUAGE_KEY = 'language';

    constructor(private translateService: TranslateService) { }

    configureTranslation(): void {
        const language = localStorage.getItem(this.LOCAL_STORAGE_LANGUAGE_KEY) || this.getInitialLanguage();
        localStorage.setItem(this.LOCAL_STORAGE_LANGUAGE_KEY, language);
        this.translateService.addLangs([LANGUAGE.EN, LANGUAGE.PL]);
        this.translateService.setDefaultLang(LANGUAGE.EN);
        this.translateService.setTranslation(LANGUAGE.EN, TRANSLATE_EN);
        this.translateService.setTranslation(LANGUAGE.PL, TRANSLATE_PL);
        this.translateService.use(language);
    }

    changeLanguage(language: LANGUAGE) {
        localStorage.setItem(this.LOCAL_STORAGE_LANGUAGE_KEY, language);
        this.translateService.use(language);
    }

    private getInitialLanguage(): string {
        const browserLanguage = navigator.language.split('-')[0];
        return browserLanguage === LANGUAGE.PL || LANGUAGE.EN
            ? browserLanguage
            : LANGUAGE.EN;
    }


}
