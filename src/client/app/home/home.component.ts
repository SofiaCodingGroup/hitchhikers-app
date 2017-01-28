import {Component, OnInit} from '@angular/core';
import {NameListService} from '../shared/index';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk/dist/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

    newName: string = '';
    errorMessage: string;
    names: any[] = [];

    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    constructor(public nameListService: NameListService, private fb: FacebookService) {
        let fbParams: FacebookInitParams = {
            appId: '1596662717016739',
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    }

    /**
     * Get the names OnInit
     */
    ngOnInit() {
        this.getNames();
        this.login();
    }

    /**
     * User login with facebook api
     */

    login(): void {
        this.fb.login().then(
            (response: FacebookLoginResponse) => console.log(response),
            (error: any) => console.error(error)
        );
    }

    /**
     * Handle the nameListService observable
     */
    getNames() {
        this.nameListService.get()
            .subscribe(
                names => this.names = names,
                error => this.errorMessage = <any>error
            );
    }

    /**
     * Pushes a new name onto the names array
     * @return {boolean} false to prevent default form submit behavior to refresh the page.
     */
    addName(): boolean {
        // TODO: implement nameListService.post
        this.names.push(this.newName);
        this.newName = '';
        return false;
    }

}
