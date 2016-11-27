import * as React from 'react';
import * as typings from './modal.type';
import './modal.scss';
export default class SModalComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    handleOk(): void;
    handleCancel(): void;
    render(): JSX.Element;
}
