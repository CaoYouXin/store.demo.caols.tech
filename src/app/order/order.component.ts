import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

    goodslist: Array<any>;
    message: string;
    amount: string;

    addressName = '曹力升';
    addressPhone = '18618128264';
    addressDetail = '晨馨花园';
    messageFocused = false;
    totalAmount = '32.00';
    freight = '32.00';
    discount = '1.00';
    isDiscountShow = new Promise(res => res(false));

    ngOnInit(): void {
        this.goodslist = JSON.parse(localStorage.getItem('order'));
        this.amount = '' + (this.goodslist.reduce((p, goods) => {
            return p + parseFloat(goods.price);
        }, 0) + parseFloat(this.freight)).toFixed(2);
        this.totalAmount = '' + (Math.max(0, parseFloat(this.amount) - parseFloat(this.discount))).toFixed(2);
    }

    showDiscount() {
        this.isDiscountShow = new Promise(res => res(true));
    }
}
