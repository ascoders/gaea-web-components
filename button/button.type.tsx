import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'
import {gaeaHelper} from '../../gaea-helper/index'

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
        '布局',
        gaeaHelper.layoutEditor,
        gaeaHelper.marginPaddingEditor,
        gaeaHelper.widthHeightEditor,
        '特效',
        gaeaHelper.opacityEditor
    ]
}

export class Props extends PropsGaea implements PropsDefine {
    style = Object.assign({}, gaeaHelper.layout, gaeaHelper.marginPadding, gaeaHelper.opacity)
    text = '按钮'
}

export interface StateDefine {

}

export class State implements StateDefine {

}