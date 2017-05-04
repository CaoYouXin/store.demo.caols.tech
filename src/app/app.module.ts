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

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    };
}

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        IndexComponent,
        GalleryComponent,
        SearchComponent,
        GoodsList1ColComponent,
        GoodsList2ColsComponent,
        FooterComponent
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
