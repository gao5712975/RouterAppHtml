/**
 * Created by moka on 16-5-30.
 */
import {Page,NavController} from 'ionic-angular'
import {SjConfig1} from './sjConfig1'

@Page({
    templateUrl:'build/business/config/sjConfig.html'
})

export class SjConfig{
	static get parameters() {
        return [
            [NavController]
        ];
    }
	
	 constructor(nav){
        this.nav = nav;
    }
	
	SjConfig1(){
        this.nav.push(SjConfig1)
    }

}

