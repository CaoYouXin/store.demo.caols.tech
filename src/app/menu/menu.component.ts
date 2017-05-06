import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    category = false;
    recommend = false;
    ordermanagement = false;

    constructor(private router: Router) {}

    goToCategory() {
        const navigate = this.router.navigate(['/category']);
    }
}
