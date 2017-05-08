import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: 'app-address-list',
    templateUrl: './addresslist.component.html',
    styleUrls: ['./addresslist.component.css']
})
export class AddressListComponent implements OnInit {

    @Input()
    show: boolean;

    @Output()
    selectBtnClick = new EventEmitter();

    addressId: number;
    addresses: Array<any>;
    isAddressEditMode: boolean;
    isEditorClicked: boolean;

    isAddressEditorShow = new Promise(res => res(false));

    ngOnInit() {
        this.addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    }

    refreshAddress() {
        this.addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    }

    selectAddress(e) {
        if (this.isEditorClicked) {
            this.isEditorClicked = false;
            return;
        }

        this.show = false;
        this.selectBtnClick.emit(e);
    }

    showAddressEditor(id: number) {
        this.isEditorClicked = true;
        this.addressId = id;
        this.isAddressEditMode = id !== null;
        this.isAddressEditorShow = new Promise(res => res(true));
    }
}
