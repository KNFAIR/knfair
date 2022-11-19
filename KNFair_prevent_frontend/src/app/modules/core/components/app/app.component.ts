import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ThemeService} from '../../service/theme.service';
import {TranslationService} from '../../service/translation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    menuMode = 'sidebar';

    layout = 'blue';

    theme = 'blue';

    ripple: boolean;

    colorScheme = 'light';

    constructor(private primengConfig: PrimeNGConfig, private themeService: ThemeService, private translationService: TranslationService) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.ripple = true;
        this.themeService.getColorScheme().subscribe(response => {
            if (response) {
                this.changeColorScheme(response);
            }
        });
        this.translationService.configureTranslation();
    }

    changeColorScheme(theme: string) {
        this._changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css', 1);
        this._changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css', 1);
        this.colorScheme = theme;
    }

    private _changeStyleSheetsColor(id, value, from) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');

        if (from === 1) {           // which function invoked this function - change scheme
            urlTokens[urlTokens.length - 1] = value;
        } else if (from === 2) {       // which function invoked this function - change color
            urlTokens[urlTokens.length - 2] = value;
        }

        const newURL = urlTokens.join('/');

        this._replaceLink(element, newURL);
    }

    private _replaceLink(linkElement, href) {
        if (this._isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    private _isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }
}
