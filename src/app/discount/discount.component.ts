import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})
export class DiscountComponent {

    @Input()
    show: boolean;

    @Output()
    btnClick = new EventEmitter();

    btnClicked() {
        this.btnClick.emit(Math.random() * 5);
        this.show = false;
    }
}
