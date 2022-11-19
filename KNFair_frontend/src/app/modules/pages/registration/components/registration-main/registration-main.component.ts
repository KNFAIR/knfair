import { Component, OnInit } from '@angular/core';
import {TRANSLATE_KEY} from '../../../../core/model/translate-key';
import { faCity, faUserTie } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-registration-main',
  templateUrl: './registration-main.component.html',
  styleUrls: ['./registration-main.component.scss']
})
export class RegistrationMainComponent implements OnInit {

    readonly landlordIcon = faCity;
    readonly tenantIcon = faUserTie;
    readonly TRANSLATE_KEY = TRANSLATE_KEY;

    constructor( private route: ActivatedRoute,
                 private router: Router) { }

    ngOnInit(): void {
       this.route.url.subscribe(r => {
           console.log(r);
       });
       console.log(this.route.pathFromRoot);
    }

    registerLandlord() {
        this.router.navigateByUrl('/registration/landlord');
    }

    registerTenant() {

    }
}
