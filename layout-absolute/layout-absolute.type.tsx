import {gaeaHelper} from 'gaea-helper'
import * as Layout from '../layout/layout.type'

export interface PropsDefine extends Layout.PropsDefine {

}

export class PropsGaea extends Layout.PropsGaea {
    gaeaName = '布局-绝对定位'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout-absolute'
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
            backgroundColor: 'transparent',
            position: 'absolute',
            width: 150,
            height: 150,
            zIndex: 1
        }
    )

    onClick = ()=> {
    }
}

export interface StateDefine {

}

export class State implements StateDefine {

}