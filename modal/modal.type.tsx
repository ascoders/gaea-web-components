import {TransparentlyNativePropsPropsDefine} from '../../../common/transparently-native-props/index'
import {gaeaHelper} from '../../gaea-helper/index'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: ReactNaitve.ViewStyle
    source?: string
    gaeaPreview?: boolean

    show?: boolean
    onOk?: ()=>void
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
        types: [{
            name: '点击确认',
            type: 'onOk',
            selfCallback: true
        }],
        events: [{
            name: '跳转网址',
            event: 'jumpUrl'
        }, {
            name: '回退',
            event: 'call',
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
    onOk = ()=> {
    }
}

export interface StateDefine {
    show?: boolean
}

export class State implements StateDefine {
    show = false
}