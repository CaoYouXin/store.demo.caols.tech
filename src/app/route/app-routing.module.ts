import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "../index/index.component";
import {DetailComponent} from "../detail/detail.component";
import {CategoryComponent} from "../category/category.component";
import {OrderComponent} from "../order/order.component";

export const routes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {}},
    {path: 'detail', component: DetailComponent, data: {}},
    {path: 'category', component: CategoryComponent, data: {}},
    {path: 'order', component: OrderComponent, data: {}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
