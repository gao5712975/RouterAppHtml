/**
 * Created by moka on 16-5-30.
 */
import {Page} from 'ionic-angular'

@Page({
    templateUrl:'build/business/config/wlConfig.html'
})

export class WlConfigPage{
    constructor(){
    	/**
    	 * 默认值
    	 */
        this.wifi = 'WAN';
        this.lwConfigShow = true;
        this.lwConfig = 'PPPOE';
        this.jmConfigShow = true;
        this.jmConfig = '不加密';
    }
}
