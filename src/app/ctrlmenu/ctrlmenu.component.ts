import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-ctrls',
    templateUrl: './ctrlmenu.component.html',
    styleUrls: ['./ctrlmenu.component.css']
})
export class CtrlMenuComponent {

    @Output()
    btnClick = new EventEmitter();

    btnClicked() {
        this.btnClick.emit();
    }
}
