
/**
 * Created by moka on 16-5-26.
 */
import {Page,NavController} from 'ionic-angular'
import {StatusBar} from 'ionic-native';
import {ZjIndex1} from './zjIndex1'
//import {ZjIndex2} from './zjIndex2'

@Page({
    templateUrl:'build/business/index/zjIndex.html'
})

export class ZjIndex{
    static get parameters() {
        return [
            [NavController]
        ];
    }

    constructor(nav){
        this.nav = nav;
    }

    ZjIndex1(){
        this.nav.push(ZjIndex1)
    }
    
//  ZjIndex2(){
//      this.nav.push(zjIndex2)
//  }
}