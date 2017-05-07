import {Component, Input, OnChanges} from "@angular/core";
import {Router} from "@angular/router";

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

    constructor(private router: Router) {}

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

    goToOrder() {
        window.localStorage.setItem('order', JSON.stringify([{
            bgImage: this.bgImage,
            name: this.name,
            price: this.price,
            count: this.count
        }]));
        const navigate = this.router.navigate(['/order']);
    }
}
