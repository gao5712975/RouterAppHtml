/**
 * Created by moka on 16-5-30.
 */
import {Page,NavController} from 'ionic-angular'
import {HyIndex} from './hyIndex'

@Page({
    templateUrl:'build/business/index/cwIndex.html'
})

export class CwIndex{
	static get parameters() {
        return [
            [NavController]
        ];
    }
	
	constructor(nav){
        this.nav = nav;
    }
	
	hyIndexm(){
        this.nav.push(HyIndex)
   }
}