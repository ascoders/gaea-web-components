import * as React from 'react'
import * as typings from './layout.type'

import {others} from '../../../common/transmit-transparently/index'

export default class LayoutComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        let style: any = {
            width: this.props.width,
            minWidth: this.props.minWidth,
            height: this.props.height,
            minHeight: this.props.minHeight,
            background: this.props.background,
            display: this.props.display,
            flexDirection: this.props.flexDirection,
            flexGrow: this.props.flexGrow,
            flexWrap: this.props.flexWrap,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems,
            overflow: this.props.overflow,
            overflowX: this.props.overflowX,
            overflowY: this.props.overflowY,
            paddingLeft: this.props.paddingLeft,
            paddingTop: this.props.paddingTop,
            paddingRight: this.props.paddingRight,
            paddingBottom: this.props.paddingBottom,
            marginLeft: this.props.marginLeft,
            marginTop: this.props.marginTop,
            marginRight: this.props.marginRight,
            marginBottom: this.props.marginBottom
        }

        return (
            <div {...others(new typings.Props(), this.props)} style={style}>{this.props.children}</div>
        )
    }
}