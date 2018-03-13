import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessageSnack {
  constructor(private snackBar: MatSnackBar) { }

  show(message: string, action: string = 'close') {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
