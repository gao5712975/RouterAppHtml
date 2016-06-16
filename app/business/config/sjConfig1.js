
/**
 * Created by moka on 16-5-26.
 */
import {Page,NavController} from 'ionic-angular'
import {StatusBar} from 'ionic-native';

@Page({
    templateUrl:'build/business/config/sjConfig1.html'
})

export class SjConfig1{
    static get parameters() {
        return [
            [NavController]
        ];
    }


    constructor(nav){
        this.nav = nav;
    }


}