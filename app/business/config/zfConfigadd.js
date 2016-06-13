
/**
 * Created by moka on 16-5-30.
 */
import {Page} from 'ionic-angular'
@Page({
    templateUrl:'build/business/config/zfConfigadd.html'
})

export class ZfConfiga{
    constructor(){
		this.zfConfig="TCP"
		this.zfConfigShow=true;
    }
}