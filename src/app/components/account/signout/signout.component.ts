import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder,
    Validators,
    ValidatorFn,
    FormGroupDirective,
    NgForm
} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { AbstractControl } from '@angular/forms/src/model';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { SharedModule } from '../../../modules/shared.module';
import { MatErrorStateMatcher } from '../../../common/matErrorStateMatcher.module';
import { HttpX } from '../../../services/httpx.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sign-out',
    templateUrl: './signout.component.html',
    styleUrls: ['./signout.component.css']
})
export class SignoutComponent {

}
