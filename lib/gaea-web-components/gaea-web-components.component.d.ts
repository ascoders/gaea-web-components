import * as React from 'react';
import * as typings from './gaea-web-components.type';
export default class GaeaWebComponents extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;

    render(): JSX.Element;
}
