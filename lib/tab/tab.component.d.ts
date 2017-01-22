import * as React from 'react';
import * as typings from './tab.type';
import './tab.scss';
export default class TabComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: typings.PropsDefine): void;
    componentDidMount(): void;
    tabHandleClick: (index: number) => void;
    render(): JSX.Element;
}
