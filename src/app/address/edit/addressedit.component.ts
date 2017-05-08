import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";

@Component({
    selector: 'app-address-editor',
    templateUrl: './addressedit.component.html',
    styleUrls: ['./addressedit.component.css']
})
export class AddressEditComponent implements OnChanges {

    @Input()
    show: boolean;

    @Input()
    editMode: boolean;

    @Input()
    id: number;

    @Output()
    saveBtnClick = new EventEmitter();

    @Output()
    deleteBtnClick = new EventEmitter();

    name: string;
    phone: string;
    province: string;
    city: string;
    strict: string;
    address: string;
    zipcode: string;

    comboData: Array<string>;
    selectProp: string;

    isComboShow = new Promise(res => res(false));

    ngOnChanges(cr) {
        if (!cr.show) {
            return;
        }

        const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
        if (!this.editMode) {
            if (addresses.length === 0) {
                this.id = 0;
            } else {
                this.id = addresses[addresses.length - 1].id + 1;
            }
        } else {
            const self = this;
            const address = addresses.reduce((p, v) => {
                if (null !== p) {
                    return p;
                }

                if (v.id === self.id) {
                    return v;
                }

                return null;
            }, null);

            if (null !== address) {
                this.name = address.name;
                this.phone = address.phone;
                this.province = address.province;
                this.city = address.city;
                this.strict = address.strict;
                this.address = address.address;
                this.zipcode = address.zipcode;
            }
        }
    }

    selectProvince() {
        this.selectProp = 'province';
        this.comboData = ['北京市', '山西省'];
        this.isComboShow = new Promise(res => res(true));
    }

    selectCity() {
        this.selectProp = 'city';
        this.comboData = ['大同市'];
        this.isComboShow = new Promise(res => res(true));
    }

    selectStrict() {
        this.selectProp = 'strict';
        this.comboData = ['城区', '南郊区'];
        this.isComboShow = new Promise(res => res(true));
    }

    select(e) {
        this[this.selectProp] = e;
    }

    save() {
        const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
        addresses[this.id] = {
            id: this.id,
            name: this.name,
            phone: this.phone,
            province: this.province,
            city: this.city,
            strict: this.strict,
            address: this.address,
            zipcode: this.zipcode,
        };
        localStorage.setItem('addresses', JSON.stringify(addresses));
        this.show = false;
        this.saveBtnClick.emit(this.id);
    }

    delete() {
        const addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
        addresses[this.id].deleted = true;
        localStorage.setItem('addresses', JSON.stringify(addresses));
        this.show = false;
        this.deleteBtnClick.emit();
    }
}
