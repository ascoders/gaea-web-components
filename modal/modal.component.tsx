import * as React from 'react'
import * as typings from './modal.type'
import Modal from '../../../web-common/modal/index'

import './modal.scss'

export default class SModalComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {
        this.setState({
            show: this.props.show
        })
    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {
        this.setState({
            show: nextProps.show
        })
    }

    handleOk() {
        this.setState({
            show: false
        })
        this.props.onOk()
    }

    handleCancel() {
        this.setState({
            show: false
        })
    }

    render() {
        if (this.props.gaeaPreview) {
            return (
                <Modal show={this.state.show}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}
                       style={Object.assign({},this.props.style)}>
                    {this.props.children}
                </Modal>
            )
        } else {
            return (
                <div style={Object.assign({},this.props.style)}>{this.props.children}</div>
            )
        }
    }
}