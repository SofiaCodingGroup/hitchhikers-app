import {Component, OnInit} from '@angular/core';
import {
    FacebookService, FacebookInitParams, FacebookLoginResponse,
    FacebookApiMethod
} from 'ng2-facebook-sdk/dist/index';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import { UserService } from '../services/userService'


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
    acessToken: string;
    userID: string;
    userPictureUrl: string;
    userName: string;
    status: string;


    constructor(private fb: FacebookService, private localStorage: LocalStorageService, private userService: UserService) {
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
                        console.log(`Good to see you,   ${response.name}  .This is your picture and id:   ${response.picture.data.url}, and this is your id:  ${response.id}`);
                        //noinspection TypeScriptUnresolvedVariable

                        //noinspection TypeScriptUnresolvedVariable
                        this.userPictureUrl = response.picture.data.url;
                        this.userName = response.name;
                        this.userID = response.id;
                      console.log(`Name: ${this.userName}, Picture: ${this.userPictureUrl}, ID: ${this.userID}`)
                        this.userService.saveUser(response);

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
