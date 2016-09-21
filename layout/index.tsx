import * as React from 'react'
import * as module from './module'

import {TransmitTransparently} from '../../../common/transmit-transparently/index'

@TransmitTransparently()
export default class LayoutComponent extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

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
            <div {...this.props.others} style={style}>{this.props.children}</div>
        )
    }
}