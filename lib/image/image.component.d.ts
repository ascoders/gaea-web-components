import * as React from 'react';
import * as typings from './image.type';
export default class ImageComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
