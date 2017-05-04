import {Component} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-goods-list-2-cols',
    templateUrl: './component.html',
    styleUrls: ['./component.css']
})
export class GoodsList2ColsComponent {

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

    constructor(private domSanitizer: DomSanitizer) {}
}
