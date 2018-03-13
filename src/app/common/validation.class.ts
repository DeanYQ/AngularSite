import { AbstractControl } from '@angular/forms/src/model';
import { ValidationErrors } from '@angular/forms/src/directives/validators';

export function valdiatePassword(control: AbstractControl): ValidationErrors {
  const pwd = <string>control.value;
  if (pwd.length < 6) {
    return { 'length': 'password must be longer than 6 characters' };
  }
  return null;
}
