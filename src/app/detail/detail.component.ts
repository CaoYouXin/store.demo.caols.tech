import {Component, OnInit} from "@angular/core";
import {URIUtil} from "../route/uri.util";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [URIUtil]
})
export class DetailComponent implements OnInit {

    galleryHeight = '500px';
    showAdd2Cart = new Promise(res => res(false));
    showGoodsDetail = true;
    showCommentsLevel = 0;
    comments = [];
    freight = '20.00';
    sales = 6;

    bgImage: string;
    name: string;
    price: string;

    constructor(private uriUtil: URIUtil) {
    }

    ngOnInit(): void {
        const params = this.uriUtil.getParam(['image', 'name', 'price']);
        this.bgImage = params.image;
        this.name = params.name;
        this.price = params.price;
    }

    callAdd2CartOut() {
        this.showAdd2Cart = new Promise(res => res(true));
    }
}
