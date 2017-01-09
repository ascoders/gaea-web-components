import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'
import {gaeaHelper} from '../../gaea-helper/index'

export interface PropsDefine extends TransparentlyPropsPropsDefine {
    label?: string
    placeholder?: string
    defaultValue?: string
}

export class PropsGaea {
    gaeaName = '输入框'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-input'
    gaeaEdit = [
        '输入框',
        {
            field: 'defaultValue',
            label: '默认内容',
            editor: 'text',
            editable: true
        },
        {
            field: 'label',
            label: '提示文字',
            editor: 'text',
            editable: true
        },
        {
            field: 'placeholder',
            label: '占位文字',
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
    label = "请输入内容"
    placeholder = "占位文字"
    defaultValue = null as any
}

export interface StateDefine {

}

export class State implements StateDefine {

}