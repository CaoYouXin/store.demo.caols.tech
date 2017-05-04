import {Component, EventEmitter, Output} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-goods-list-2-cols',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class GoodsList2ColsComponent {

    private isCartClicked: boolean;

    list: Array<any> = [{
        image: 'url("../../assets/goods1.png")',
        name: 'name name name name name name name name name',
        price: '20.00'
    }, {
        image: 'url("../../assets/goods1.png")',
        name: 'name name name name name name name name name',
        price: '20.00'
    }, {
        image: 'url("../../assets/goods2.png")',
        name: 'name name name name name name name name name',
        price: '20.00'
    }, {
        image: 'url("../../assets/goods1.png")',
        name: 'name name name name name name name name name',
        price: '20.00'
    }, {
        image: 'url("../../assets/goods2.png")',
        name: 'name name name name name name name name name',
        price: '20.00'
    }];

    @Output()
    add2Cart = new EventEmitter();

    constructor(private domSanitizer: DomSanitizer) {}

    goToDetail(item: any) {
        if (this.isCartClicked) {
            this.isCartClicked = false;
            return;
        }
        alert('detail ' + item.name);
    }

    addToCart(item: any) {
        this.isCartClicked = true;
        this.add2Cart.emit(item);
    }
}
