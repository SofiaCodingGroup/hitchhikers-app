import {Component, OnInit} from '@angular/core';
import {
    FacebookService, FacebookInitParams, FacebookLoginResponse,
    FacebookApiMethod
} from 'ng2-facebook-sdk/dist/index';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import { AuthTokenService } from '../services/authToken'


import { Config } from '../index';

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

    logged: boolean;
    fbParams: FacebookInitParams;
    fbApiMethod: FacebookApiMethod;
    userPictureUrl: string;
    userName: string;


    constructor(private fb: FacebookService, private localStorage: LocalStorageService, private authService: AuthTokenService) {
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
                console.log(response);
                this.logged = true;
                this.fb.api('/me', this.fbApiMethod, {fields: ['id', 'name', 'picture']}).then(
                    (response: FacebookLoginResponse) => {
                        //noinspection TypeScriptUnresolvedVariable
                        console.log(`Good to see you,  + ${response.name}  .This is your picture and id:   ${response.picture.data.url}, and this is your id:  ${response.id}`);
                        //noinspection TypeScriptUnresolvedVariable
                        this.userName = response.name;
                        //noinspection TypeScriptUnresolvedVariable
                        this.userPictureUrl = response.picture.data.url;

                        //setting user id into the local storage. This step should be moved at the response of the nodejs backend
                        this.authService.saveToken(response.authResponse);
                        //noinspection TypeScriptUnresolvedVariable

                        this.localStorage.store('userID', response.id);

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
