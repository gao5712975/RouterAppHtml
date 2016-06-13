/**
 * Created by moka on 16-5-30.
 */
import {Page,NavController} from 'ionic-angular'
import {ZfConfiga} from './zfConfigadd'


@Page({
    templateUrl:'build/business/config/zfConfig.html'
})

export class ZfConfig{
	static get parameters() {
        return [
            [NavController]
        ];
    }
	
    constructor(nav){
		this.nav = nav
    }
    
    ZfConfiga(){
        this.nav.push(ZfConfiga)
    }

}

