import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    private minNamesHeight: number;
    private minItemsHeight: number;
    private numNamesOffset: number;
    private numItemsOffset: number;
    private scrollTop: number;
    private isCartClicked: boolean;

    private itemValues = [];
    private numCategoryHeight = window.innerWidth > 520
        ? window.innerHeight - (240 + 175) / 1489 * 500 - 50 : window.innerHeight - 50;
    private numNamesLoc = 0;
    private numItemsLoc = 0;
    private numSelectedNameLoc = 0;

    names: Array<string>;
    items: Array<any>;
    selectedName = 0;
    categoryHeight = this.numCategoryHeight + 'px';
    namesLoc = 'translateY(' + this.numNamesLoc + ')';
    itemsLoc = 'translateY(' + this.numItemsLoc + ')';
    selectedNameLoc = 'translateY(' + this.numSelectedNameLoc + ')';
    showAdd2Cart = new Promise(res => res(false));
    add2CartBgImage = 'url("../../assets/goods2.png")';
    add2CartName = 'name name name name name name name name name name name name';
    add2CartPrice = '20.00';

    constructor(private router: Router) {}

    ngOnInit() {
        const data = {
            "分类": [{
                image: 'url("../../assets/goods1.png")',
                name: 'name name name name name name name name name',
                price: '20.00'
            }, {
                image: 'url("../../assets/goods2.png")',
                name: 'name name name name name name name name name',
                price: '20.00'
            }],
            "分类分类": [{
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
            }],
            "分类分类分类分类": [{
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
            }, {
                image: 'url("../../assets/goods1.png")',
                name: 'name name name name name name name name name',
                price: '20.00'
            }, {
                image: 'url("../../assets/goods2.png")',
                name: 'name name name name name name name name name',
                price: '20.00'
            }]
        };

        let value = 0;
        const self = this;
        this.names = Object.keys(data);
        this.items = this.names.reduce((ret, name) => {
            self.itemValues.push([value, value += (30 + 100 * data[name].length), value - 30, value]);
            ret.push({
                isText: true,
                text: name
            });
            ret = ret.concat(data[name]);
            return ret;
        }, []);

        this.minNamesHeight = Math.min(0, this.numCategoryHeight - 50 * this.names.length);
        this.minItemsHeight = Math.min(0, this.numCategoryHeight - (
                30 * this.names.length + 100 * (this.items.length - this.names.length)
            ));
    }

    autoSelectName(num: number) {
        const self = this;
        this.itemValues.forEach((vs, idx) => {
            if (num >= vs[0] && num < vs[1]) {
                self.selectedName = idx;

                if (num >= vs[2] && num <= vs[3]) {
                    self.numSelectedNameLoc = vs[2] - num;
                    self.selectedNameLoc = 'translateY(' + this.numSelectedNameLoc + 'px)';
                } else {
                    self.numSelectedNameLoc = 0;
                    self.selectedNameLoc = 'translateY(' + this.numSelectedNameLoc + ')';
                }
            }
        });
    }

    userSelectName(idx: number) {
        let num = 0 - this.itemValues[idx][0];
        num = Math.min(0, Math.max(num, this.minItemsHeight));
        this.itemsLoc = 'translateY(' + num + 'px)';
        this.numItemsLoc = num;
        this.selectedName = idx;
    }

    namesPanStart() {
        this.scrollTop = document.body.scrollTop;
        this.numNamesOffset = 0;
    }

    namesPanMove(e) {
        let num = this.numNamesLoc + e.deltaY;

        if (document.body.scrollTop > 0 && num > this.minNamesHeight) {
            this.numNamesOffset = num - this.minNamesHeight;
            document.body.scrollTop = this.scrollTop - this.numNamesOffset;
            this.namesLoc = 'translateY(' + (num = this.minNamesHeight) + 'px)';
        } else {
            if (num < this.minNamesHeight) {
                document.body.scrollTop = this.scrollTop + this.minNamesHeight - num;
                this.namesLoc = 'translateY(' + (num = this.minNamesHeight) + 'px)';
            } else {
                num = Math.min(0, Math.max(num - this.numNamesOffset, this.minNamesHeight));
                this.namesLoc = 'translateY(' + num + 'px)';
            }
        }

        return num;
    }

    namesPanEnd(e) {
        this.numNamesLoc = this.namesPanMove(e);
    }

    itemsPanStart() {
        this.scrollTop = document.body.scrollTop;
        this.numItemsOffset = 0;
    }

    itemsPanMove(e) {
        let num = this.numItemsLoc + e.deltaY;

        if (document.body.scrollTop > 0 && num > this.minItemsHeight) {
            this.numItemsOffset = num - this.minItemsHeight;
            document.body.scrollTop = this.scrollTop - this.numItemsOffset;
            this.itemsLoc = 'translateY(' + (num = this.minItemsHeight) + 'px)';
        } else {
            if (num < this.minItemsHeight) {
                document.body.scrollTop = this.scrollTop + this.minItemsHeight - num;
                this.itemsLoc = 'translateY(' + (num = this.minItemsHeight) + 'px)';
            } else {
                num = Math.min(0, Math.max(num - this.numItemsOffset, this.minItemsHeight));
                this.itemsLoc = 'translateY(' + num + 'px)';
            }
        }

        this.autoSelectName(Math.abs(num));

        return num;
    }

    itemsPanEnd(e) {
        this.numItemsLoc = this.itemsPanMove(e);
    }

    add2cartClicked(item) {
        this.isCartClicked = true;
        this.add2CartBgImage = item.image;
        this.add2CartName = item.name;
        this.add2CartPrice = item.price;
        this.showAdd2Cart = new Promise(res => res(true));
    }

    goToDetail(item: any) {
        if (this.isCartClicked) {
            this.isCartClicked = false;
            return;
        }
        const navigate = this.router.navigate(['/detail', item]);
    }
}
