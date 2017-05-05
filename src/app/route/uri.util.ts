import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class URIUtil {

    constructor(private router: Router) {}

    getParam(ps: Array<string>): any {
        const decodedURI = window['decodeURIComponent'](this.router.routerState.snapshot.url);
        return decodedURI.split(/;|=/).reduce((p, v) => {
            if (ps.some((param) => param === v)) {
                p[v] = null;
            } else {
                Object.keys(p).forEach((param) => {
                    if (null === p[param]) {
                        p[param] = v;
                    }
                });
            }
            return p;
        }, {});
    }

}
