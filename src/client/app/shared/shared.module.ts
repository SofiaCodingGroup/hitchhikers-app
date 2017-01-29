import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToolbarComponent} from './toolbar/index';
import {NavbarComponent} from './navbar/index';
import {NameListService} from './name-list/index';

import {FacebookService} from 'ng2-facebook-sdk/dist/index';
import {Ng2Webstorage} from 'ng2-webstorage'


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, Ng2Webstorage],
    declarations: [ToolbarComponent, NavbarComponent],
    exports: [ToolbarComponent, NavbarComponent,
        CommonModule, FormsModule, RouterModule],
    providers: [FacebookService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}
