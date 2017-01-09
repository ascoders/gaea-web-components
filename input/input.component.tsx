import * as React from 'react'
import * as typings from './input.type'

import {Input} from '../../../web-common/input/index'

export default class InputComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Input label={this.props.label}
                   placeholder={this.props.placeholder}
                   defaultValue={this.props.defaultValue}
                   style={this.props.style}/>
        )
    }
}