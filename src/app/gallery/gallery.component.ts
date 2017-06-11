import {Component, Input, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

const truePromise = new Promise<boolean>((resolve, reject) => {
    resolve(true);
});

const falsePromise = new Promise<boolean>((resolve, reject) => {
    resolve(false);
});

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    isSwipe;
    timeout;
    callback;

    animation = true;
    items: Array<any> = [];
    _items = [{
        src: 'url("assets/goods1.png")'
    }, {
        src: 'url("assets/goods2.png")'
    }, {
        src: 'url("assets/goods1.png")'
    }, {
        src: 'url("assets/goods2.png")'
    }];
    activeIndex = 0;

    @Input()
    auto: boolean;

    @Input()
    height: string;

    constructor(private sanitizer: DomSanitizer) {
    }

    private build() {
        this.animation = false;
        const len = this._items.length;
        let previous = (this.activeIndex - 1) % len;
        if (previous < 0) {
            previous += len;
        }
        const next = (this.activeIndex + 1) % len;
        this.items = [
            this._items[previous]
        ].concat([
            this._items[this.activeIndex]
        ]).concat([
            this._items[next]
        ]).map(item => {
            delete item['left'];
            delete item['right'];
            return item;
        });
    }

    private toTheLeft() {
        this.animation = true;
        this.items.forEach(item => item.left = truePromise);
        this.activeIndex = (this.activeIndex + 1) % this._items.length;
        setTimeout((self) => {
            self.build();
        }, 1000, this);
    }

    private toTheRight() {
        this.animation = true;
        this.items.forEach(item => item.right = truePromise);
        this.activeIndex = (this.activeIndex - 1) % this._items.length;
        if (this.activeIndex < 0) {
            this.activeIndex += this._items.length;
        }
        setTimeout((self) => {
            self.build();
        }, 1000, this);
    }

    ngOnInit() {
        this.build();
        this.callback = (self) => {
            self.toTheLeft();
            self.timeout = setTimeout(self.callback, 3000, self);
        };
        if (this.auto) {
            this.timeout = setTimeout(this.callback, 3000, this);
        }
    }

    itemClicked(item) {
        if (this.isSwipe) {
            this.isSwipe = false;
        } else {
            console.log(item);
        }
    }

    onSwipeLeft() {
        this.isSwipe = true;
        clearTimeout(this.timeout);
        this.toTheLeft();

        if (this.auto) {
            this.timeout = setTimeout(this.callback, 3000, this);
        }
    }

    onSwipeRight() {
        this.isSwipe = true;
        clearTimeout(this.timeout);
        this.toTheRight();
        if (this.auto) {
            this.timeout = setTimeout(this.callback, 3000, this);
        }
    }
}
