import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})
export class DiscountComponent {

    @Input()
    show: boolean;
}
