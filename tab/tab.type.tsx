import { TransparentlyNativePropsPropsDefine } from 'nt-transparently-native-props'
import { gaeaHelper } from 'gaea-helper'
import { CSSProperties } from 'react'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties
    source?: string
    gaeaPreview?: boolean

    tabNum?: number
    activeTab?:number
}

export class PropsGaea {
    gaeaName = 'tab切换'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'tab-change'
    canDragIn =  true
    // childUniqueKey=[[],'gaea-layout'] 

    gaeaEdit = [
        '',
        {
            field: 'activeTab',
            label: '当前激活',
            editor: 'number'
        },
        '特效',

    ]
    gaeaEvent = {
        triggers: [{
            name: '点击确认',
            type: 'onOk',
            selfCallback: true
        }],
        effects: [{
            name: '跳转网址',
            type: 'jumpUrl'
        }, {
            name: '回退',
            type: 'call',
            call: {
                functionName: 'back'
            }
        }]
    }
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.opacity
    )
    tabNum = 2    
    activeTab = 0
}

export interface StateDefine {
    activeTab?:number
}

export class State implements StateDefine {

}