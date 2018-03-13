import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { HtmlX } from '../../../common/util.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'not-found',
  templateUrl: './notFound.component.html',
  styleUrls: ['./notFound.component.css']
})
export class NotFoundComponent {

  constructor() {
    HtmlX.TileBody();
  }
}
