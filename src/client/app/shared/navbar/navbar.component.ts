import {Component, OnInit} from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk/dist/index';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})
export class NavbarComponent implements OnInit {

    logged: boolean;
    fbParams: FacebookInitParams;

    constructor(private fb: FacebookService) {
        this.fbParams = {
            appId: '1596662717016739',
            version: 'v2.8'
        };
    }

    ngOnInit() {
        this.fb.init(this.fbParams);
        this.logged = false;
    }

    login(): void {
        this.fb.login().then(
            (response: FacebookLoginResponse) => {
                console.log(response)
                this.logged = true;
            },
            (error: any) => console.error(error)
        );
    }

    logout(): void {
        this.fb.logout().then(
            (response: FacebookLoginResponse) => {
                console.log(response)
                this.logged = false;
            },
            (error: any) => console.error(error)
        );
    }
}
