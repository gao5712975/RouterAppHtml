/**
 * Created by moka on 16-5-25. 入口文件
 */
import {ViewChild} from '@angular/core';
import {App, Platform,MenuController,Events} from 'ionic-angular';
import {StatusBar, Splashscreen,BatteryStatus} from 'ionic-native';
import {Home} from './business/home/home';
import {GetMenuPage} from './business/menu/menu';

import {interceptor} from './interceptor/HttpInterceptor';

/**
 * providers
 */
import {FirstLogin} from './providers/FirstLogin';

@App({
    templateUrl: 'build/app.html',
    queries: {
        nav: new ViewChild('content')
    },
    // tabbarPlacement: "bottom",
    // mode:"md",
    providers: [interceptor,FirstLogin]
})
class RouterApp {
    static get parameters() {
        return [
            [Platform],[MenuController],[Events],[FirstLogin]
        ];
    }
    constructor(platform,menu,events,FirstLogin) {
        this.events = events;

        this.menu = menu;

        /**
         * 默认登陆
         */
        FirstLogin.login().then((res) => {
          if(res && res.code == 0){
            //TODO 默认登陆成功
          }
          console.info(res);
        })
        //默认为首次加载app 给引导页面 之后直接给首页
        //首页
        this.rootPage = new GetMenuPage().getMenuPage()[0].page;
        //this.rootPage = Home;

        // this.rootPage = new GetMenuPage().pages[0].page;
        // Call any initial plugins when ready
        platform.ready().then(() => {
            // StatusBar.styleDefault 状态栏默认样式，也就是电池信号黑色；
            // StatusBar.styleLightContent 状态栏内容浅色，貌似就是白色，适合深色背景；
            // StatusBar.styleBlackTranslucent 状态栏黑色半透明，我测了下，跟上面一样的效果，电池时间都是白色的，适合深色背景；
            // StatusBar.styleBlackOpaque 状态栏黑色不透明。我测了下，还是白色的，跟上面一样，适合深色背景；
            // StatusBar.hide 状态栏隐藏；
            // StatusBar.show 状态栏显示；
            Splashscreen.hide();
            StatusBar.styleBlackOpaque();
        });

        //获取菜单
        this.appPages = new GetMenuPage().getMenuPage();

        this.events.subscribe('backButton',() => {
            this.nav.pop();
        })
    }

    openPage(p){
        // this.menu.close().then((bo) => {
        //     this.nav.setRoot(p);
        // });
        this.nav.setRoot(p);
        this.menu.close()

    }

    closeMenu(){
      this.menu.close();
    }
}
