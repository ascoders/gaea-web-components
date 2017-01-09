import { TransparentlyPropsPropsDefine } from 'nt-transparently-props'
import { gaeaHelper } from 'gaea-helper'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    onClick?: () => void
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
        '定位',
        gaeaHelper.positionEditor,
        '背景',
        gaeaHelper.backgroundEditor,
        '边框',
        gaeaHelper.borderEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
    gaeaEvent = {
        triggers: [{
            name: '点击',
            type: 'onClick',
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
        gaeaHelper.layout,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight,
        gaeaHelper.overflow,
        gaeaHelper.background,
        gaeaHelper.border,
        gaeaHelper.position,
        {
            display: 'flex',
            backgroundColor: 'transparent'
        }
    )

    onClick = () => {
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}