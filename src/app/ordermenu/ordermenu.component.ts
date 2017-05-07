import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-ordermenu',
    templateUrl: './ordermenu.component.html',
    styleUrls: ['./ordermenu.component.css']
})
export class OrderMenuComponent {

    @Input()
    total: string;

    @Output()
    btnClick = new EventEmitter();
}
