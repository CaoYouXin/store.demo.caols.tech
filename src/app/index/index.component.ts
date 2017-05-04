import {Component} from "@angular/core";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent {

    showAdd2Cart = new Promise(res => res(false));
    add2CartBgImage = 'url("../../assets/goods2.png")';
    add2CartName = 'name name name name name name name name name name name name';
    add2CartPrice = '20.00';

    add2cartClicked(item) {
        this.add2CartBgImage = item.image;
        this.add2CartName = item.name;
        this.add2CartPrice = item.price;
        this.showAdd2Cart = new Promise(res => res(true));
    }
}
