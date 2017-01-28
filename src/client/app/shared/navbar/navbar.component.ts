import {Component, OnInit} from '@angular/core';
import {
    FacebookService, FacebookInitParams, FacebookLoginResponse,
    FacebookApiMethod
} from 'ng2-facebook-sdk/dist/index';

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
    fbApiMethod: FacebookApiMethod;
    userPictureUrl: string;
    userName: string

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
                this.fb.api('/me', this.fbApiMethod, {fields: ['id', 'name', 'picture']}).then(
                    (response: FacebookLoginResponse) => {
                        //noinspection TypeScriptUnresolvedVariable
                        console.log('Good to see you, ' + response.name + '. This is your picture and id: ' + response.picture.data.url + ', ' + response.id);
                        //noinspection TypeScriptUnresolvedVariable
                        this.userName = response.name;
                        //noinspection TypeScriptUnresolvedVariable
                        this.userPictureUrl = response.picture.data.url;
                    }
                );
            },
            (error: any) => console.error(error)
        );
    }

    logout(): void {
        this.fb.logout().then(
            (response: FacebookLoginResponse) => {
                console.log(response)
                this.logged = false;
                this.userName = undefined;
                this.userPictureUrl = undefined;
            },
            (error: any) => console.error(error)
        );
    }
}
