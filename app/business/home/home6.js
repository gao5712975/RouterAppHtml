/**
 * Created by moka on 16-5-26.
 */
import {Page,NavController} from 'ionic-angular'
import {IndexPage} from '../index/index'
import {GetMenuPage} from '../menu/menu';

@Page({
    templateUrl: 'build/business/home/home6.html'
})

export class Home6{
    static get parameters() {
        return [
            [NavController]
        ];
    }

    constructor(nav){
        this.nav = nav;
    }

    goToIndexPage(){
        this.nav.setRoot(new GetMenuPage().getMenuPage()[0].page);
    }
}