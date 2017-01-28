import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NameListService} from '../shared/name-list/index';
import {FacebookService} from 'ng2-facebook-sdk/dist/index';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService, FacebookService]
})
export class HomeModule {
}
