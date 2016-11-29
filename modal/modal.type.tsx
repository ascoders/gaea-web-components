import { TransparentlyNativePropsPropsDefine } from 'nt-transparently-native-props'
import { gaeaHelper } from 'gaea-helper'
import { CSSProperties } from 'react'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties
    source?: string
    gaeaPreview?: boolean

    show?: boolean
    onOk?: () => void
}

export class PropsGaea {
    gaeaName = '模态框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-modal'
    canDragIn = true
    gaeaEdit = [
        '模态框',
        {
            field: 'show',
            label: '是否显示',
            editor: 'switch'
        },
        '特效',
        gaeaHelper.opacityEditor
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
    show = true
    onOk = () => {
    }
}

export interface StateDefine {
    show?: boolean
}

export class State implements StateDefine {
    show = false
}