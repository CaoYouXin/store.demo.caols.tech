import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-combo',
    templateUrl: './combo.component.html',
    styleUrls: ['./combo.component.css']
})
export class ComboComponent {

    @Input()
    show: boolean;

    @Input()
    data: Array<string>;

    @Output()
    btnClick = new EventEmitter();

    btnClicked(e) {
        this.show = false;
        this.btnClick.emit(e);
    }
}
