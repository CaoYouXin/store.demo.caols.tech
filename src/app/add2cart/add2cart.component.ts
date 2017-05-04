import {Component, Input, OnChanges} from "@angular/core";

@Component({
    selector: 'app-add2cart',
    templateUrl: './add2cart.component.html',
    styleUrls: ['./add2cart.component.css']
})
export class Add2CartComponent {

    @Input()
    show: boolean;

    @Input()
    bgImage: string;

    @Input()
    name: string;

    @Input()
    price: '20.00';

    count = 1;
    styles = ['style0', 'style1', 'style2', 'style1', 'style2', 'style1', 'style2', 'style1', 'style2', 'style1', 'style2'];

    countChange(newCount) {
        try {
            newCount = window['parseInt'](newCount);

            if (newCount < 1) {
                return false;
            }

            this.count = newCount;
        } catch (e) {
            return false;
        }
    }

    countMinus() {
        if (this.count <= 1) {
            return;
        }
        this.count -= 1;
    }
}
