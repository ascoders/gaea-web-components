import { TransparentlyNativePropsPropsDefine } from 'nt-transparently-native-props'
import { CSSProperties } from 'react'
import { gaeaHelper } from 'gaea-helper'

export interface PropsDefine extends TransparentlyNativePropsPropsDefine {
    style?: CSSProperties
    source?: string

    dots?: boolean
    autoPlay?: boolean
    speed?: number
    autoPlaySpeed?: number
}

export class PropsGaea {
    gaeaName = '轮播'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-swiper'
    canDragIn = true
    gaeaEdit = [
        '轮播',
        {
            field: 'dots',
            label: '是否显示计数点',
            editor: 'switch'
        },
        {
            field: 'autoPlay',
            label: '自动播放',
            editor: 'switch'
        },
        {
            field: 'autoPlaySpeed',
            label: '自动播放间隔',
            editor: 'number'
        },
        {
            field: 'speed',
            label: '切换动画时间',
            editor: 'number'
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
        gaeaHelper.widthHeight
    )
    source = ''
    dots = true
    autoPlay = false
    speed = 500
    autoPlaySpeed = 3000
}

export interface StateDefine {

}

export class State implements StateDefine {

}