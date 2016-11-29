import {TransparentlyPropsPropsDefine} from 'nt-transparently-props'
import {gaeaHelper} from 'gaea-helper'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    /**
     * 显示的文字
     */
    text?: string
}

export class PropsGaea {
    gaeaName = '按钮'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-button'
    gaeaEdit = [
        '按钮',
        {
            field: 'text',
            label: '内容',
            editor: 'text',
            editable: true
        },
        '布局',
        gaeaHelper.layoutEditor,
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign(
        {},
        gaeaHelper.layout,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight
    )
    text = '按钮'
}

export interface StateDefine {

}

export class State implements StateDefine {

}