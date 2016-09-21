import {TransparentlyPropsPropsDefine} from '../../../common/transparently-props/index'

export interface PropsInterface extends TransparentlyPropsPropsDefine {
    width?: number
    minWidth?: number
    height?: number
    minHeight?: number
    display?: string
    justifyContent?: string
    alignItems?: string
    flexDirection?: string
    flexWrap?: string
    flexGrow?: number
    background?: string
    overflow?: string
    overflowX?: string
    overflowY?: string
    paddingLeft?: number
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    marginLeft?: number
    marginTop?: number
    marginRight?: number
    marginBottom?: number
}

export class PropsGaea {
    gaeaName = '布局'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'gaea-layout'
    gaeaEdit = [{
        field: 'flexGrow',
        label: 'flex-grow',
        type: 'number',
        editor: 'text',
        editable: true,
        notNullValue: 1,
        canNull: true
    }, {
        field: 'height',
        label: '高度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minHeight',
        label: '最小高度',
        editor: 'text',
        type: 'number',
        notNullValue: 0,
        editable: true,
        canNull: true
    }, {
        field: 'width',
        label: '宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 50,
        canNull: true
    }, {
        field: 'minWidth',
        label: '最小宽度',
        editor: 'text',
        type: 'number',
        editable: true,
        notNullValue: 0,
        canNull: true
    }, {
        field: 'display',
        label: '布局类型',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex',
            value: 'flex'
        }, {
            key: 'block',
            value: 'block'
        }, {
            key: 'inline-block',
            value: 'inline-block'
        }, {
            key: 'table',
            value: 'table'
        }]
    }, {
        field: 'justifyContent',
        label: '主轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'space-between',
            value: 'space-between'
        }, {
            key: 'space-around',
            value: 'space-around'
        }]
    }, {
        field: 'alignItems',
        label: '交叉轴对齐方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'flex-start',
            value: 'flex-start'
        }, {
            key: 'flex-end',
            value: 'flex-end'
        }, {
            key: 'center',
            value: 'center'
        }, {
            key: 'baseline',
            value: 'baseline'
        }, {
            key: 'stretch',
            value: 'stretch'
        }]
    }, {
        field: 'flexDirection',
        label: '布局方向',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'row',
            value: 'row'
        }, {
            key: 'row-reverse',
            value: 'row-reverse'
        }, {
            key: 'column',
            value: 'column'
        }, {
            key: 'column-reverse',
            value: 'column-reverse'
        }]
    }, {
        field: 'flexWrap',
        label: '排列方式',
        editor: 'selector',
        editable: true,
        selector: [{
            key: 'nowrap',
            value: 'nowrap'
        }, {
            key: 'wrap',
            value: 'wrap'
        }, {
            key: 'wrap-reverse',
            value: 'wrap-reverse'
        }]
    }, {
        field: null as any,
        label: '边距',
        editor: 'marginPadding',
        editable: true
    }]
}

export class Props extends PropsGaea implements PropsInterface {
    display = 'flex'
    flexGrow = null as any
    height = null as number
    minHeight = null as number
    width = null as number
    minWidth = null as number
    justifyContent = 'flex-start'
    alignItems = 'stretch'
    flexDirection = 'row'
    flexWrap = 'nowrap'
    background = 'white'
    overflow = 'hidden'
    overflowX = null as any
    overflowY = null as any
    paddingLeft = 0
    paddingTop = 0
    paddingRight = 0
    paddingBottom = 0
    marginLeft = 0
    marginTop = 0
    marginRight = 0
    marginBottom = 0
}

export interface StateInterface {

}

export class State implements StateInterface {

}