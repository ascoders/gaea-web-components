import * as React from 'react'
import * as typings from './layout-absolute.type'
import Layout from '../layout/layout.component'

export default class LayoutAbsoluteComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        return (
            <Layout {...this.props}>{this.props.children}</Layout>
        )
    }
}