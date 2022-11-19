import { Component, OnInit } from '@angular/core';
import {TRANSLATE_KEY} from '../../../../core/model/translate-key';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faHotel} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration-landlord',
  templateUrl: './registration-landlord.component.html',
  styleUrls: ['./registration-landlord.component.scss']
})
export class RegistrationLandlordComponent implements OnInit {

    readonly hotelIcon = faHotel;
    readonly TRANSLATE_KEY = TRANSLATE_KEY;

    personalDataForm: FormGroup;

      constructor() {
          this._createFormGroup();
      }

      ngOnInit(): void {
      }


    onSave(): void {
    }

    onCancel(): void {
        this._createFormGroup();
    }

    private _createFormGroup() {
        this.personalDataForm = new FormGroup({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl(''),
            street: new FormControl(''),
            homeNo: new FormControl(''),
            zipCode: new FormControl(''),
            city: new FormControl('')
        });
    }

}
