/**
 * Created by moka on 16-5-30.
 */

import {Home} from '../home/home'
import {ZjIndex} from '../index/zjIndex'
import {ConfigPage} from '../config/config'
import {ActionSheetPage} from '../actionSheet/actionSheet'

import {WlConfigPage} from '../config/wlConfig'
import {HmdConfig} from '../config/hmdConfig'
import {GzConfig} from '../config/gzConfig'
import {QosConfig} from '../config/qosConfig'
import {FkConfig} from '../config/fkConfig'
import {ZfConfig} from '../config/zfConfig'
import {DmzConfig} from '../config/dmzConfig'
import {XgConfig} from '../config/xgConfig'
import {YxConfig} from '../config/yxConfig'
import {RzConfig} from '../config/rzConfig'
import {SjConfig} from '../config/sjConfig'


export class GetMenuPage{

    constructor(){
        this.pages = [];
    }

    getMenuPage(){
      this.pages.push(
          {
              page:ZjIndex,
              index:0,
              title:"工作模式",
              icon: 'calendar'
          },
          {
              page:WlConfigPage,
              index:1,
              title:"网络设置",
              icon: 'contacts'
          },
          {
              page:HmdConfig,
              index:2,
              title:"黑名单列表",
              icon:"contacts"
          },
          {
              page:GzConfig,
              index:3,
              title:"工作模式",
              icon:"contacts"
          },
          {
              page:QosConfig,
              index:4,
              title:"QOS限速",
              icon:"contacts"
          },
          {
              page:FkConfig,
              index:5,
              title:"访客网络",
              icon:"contacts"
          },{
              page:ZfConfig,
              index:6,
              title:"端口转发",
              icon:"contacts"
          },{
              page:DmzConfig,
              index:7,
              title:"dmz",
              icon:"contacts"
          },{
              page:XgConfig,
              index:8,
              title:"修改管理密码",
              icon:"contacts"
          },{
              page:YxConfig,
              index:9,
              title:"运行状态",
              icon:"contacts"
          },{
              page:RzConfig,
              index:10,
              title:"日志记录",
              icon:"contacts"
          },{
              page:SjConfig,
              index:11,
              title:"在线升级",
              icon:"contacts"
          }
          
      )
      return this.pages;
    }
}