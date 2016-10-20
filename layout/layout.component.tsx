import * as React from 'react'
import * as typings from './layout.type'

export default class LayoutComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <div onClick={this.props.onClick}
                 style={this.props.style}>{this.props.children}</div>
        )
    }
}