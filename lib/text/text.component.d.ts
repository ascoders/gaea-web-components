import * as React from 'react';
import * as typings from './text.type';
export default class TextComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
