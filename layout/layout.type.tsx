import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'
import {gaeaHelper} from '../../gaea-helper/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    onClick?: ()=>void
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    canDragIn = true
    gaeaEdit = [
        '布局',
        gaeaHelper.layoutEditor,
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        gaeaHelper.overflowEditor,
        '背景',
        gaeaHelper.backgroundEditor,
        '边框',
        gaeaHelper.borderEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
    gaeaEvent = {
        types: [{
            name: '点击',
            type: 'onClick',
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
        gaeaHelper.layout,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight,
        gaeaHelper.overflow,
        gaeaHelper.background,
        gaeaHelper.border,
        {
            display: 'flex',
            backgroundColor: 'transparent'
        }
    )

    onClick = ()=> {
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}