import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from "./route/app-routing.module";
import {AppComponent} from "./app.component";
import {IndexComponent} from "./index/index.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {SearchComponent} from "./search/search.component";
import {GoodsList1ColComponent} from "./goodslist/onecol/component";
import {GoodsList2ColsComponent} from "./goodslist/twocols/component";
import {FooterComponent} from "./footer/footer.component";
import {MenuComponent} from "./menu/menu.component";
import {Add2CartComponent} from "./add2cart/add2cart.component";
import {DetailComponent} from "./detail/detail.component";
import {CtrlMenuComponent} from "./ctrlmenu/ctrlmenu.component";
import {CategoryComponent} from "./category/category.component";
import {OrderComponent} from "./order/order.component";
import {OrderMenuComponent} from "./ordermenu/ordermenu.component";
import {DiscountComponent} from "./discount/discount.component";

export class MyHammerConfig extends HammerGestureConfig {
    overrides = {
        'swipe': {velocity: 0.4, threshold: 20}, // override default settings
        'pan': {threshold: 0}
    };
}

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        Add2CartComponent,
        IndexComponent,
        GalleryComponent,
        SearchComponent,
        GoodsList1ColComponent,
        GoodsList2ColsComponent,
        FooterComponent,
        DetailComponent,
        CtrlMenuComponent,
        CategoryComponent,
        OrderComponent,
        OrderMenuComponent,
        DiscountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
