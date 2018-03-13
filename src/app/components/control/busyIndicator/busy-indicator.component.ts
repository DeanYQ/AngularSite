import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material';
import { StatusInspector } from '../../../services/status-inspector.service';
import { DataEventArgs, EventObserver } from '../../../common/event.class';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'busy-indicator',
    templateUrl: './busy-indicator.component.html',
    styleUrls: ['./busy-indicator.component.css']
})
export class BusyIndicatorComponent {
    private isBusyObserver: EventObserver;

    constructor(private statusInspector: StatusInspector) {
        this.isBusyObserver = new EventObserver(this, this.OnIsBusyChanged);
        this.statusInspector.IsBusyEventSubject.Attach(this.isBusyObserver);
        this.IsBusy = false;
    }

    IsBusy: boolean;

    private OnIsBusyChanged(o: any, args: DataEventArgs<boolean>): void {
        if (args !== null) {
            o.IsBusy = args.Data;
        }
    }

    Cleanup() {
        this.statusInspector.IsBusyEventSubject.Detach(this.isBusyObserver);
    }
}
