import * as React from 'react'
import * as typings from './button.type'

import {Button} from '../../../web-common/button/index'

export default class LayoutComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Button style={this.props.style}>{this.props.text}</Button>
        )
    }
}