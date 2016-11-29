import { TransparentlyNativePropsPropsDefine } from 'nt-transparently-native-props'
import { gaeaHelper } from 'gaea-helper'
import { CSSProperties } from 'react'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties
    source?: string
}

export class PropsGaea {
    gaeaName = '图片'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-image'
    gaeaEdit = [
        '图片',
        {
            field: 'source',
            label: '图片地址',
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
        gaeaHelper.layoutNative,
        gaeaHelper.marginPadding,
        gaeaHelper.opacity,
        gaeaHelper.widthHeight,
        {
            width: 100,
            height: 100
        }
    )
    source = ''
}

export interface StateDefine {

}

export class State implements StateDefine {

}