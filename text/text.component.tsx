import * as React from 'react'
import * as typings from './text.type'

export default class TextComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <span style={this.props.style}>{this.props.text}</span>
        )
    }
}