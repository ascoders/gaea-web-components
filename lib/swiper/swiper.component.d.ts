import * as React from 'react';
import * as typings from './swiper.type';
import './swiper.scss';
import './react-slick.scss';
import './react-slick-theme.scss';
export default class SwiperComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine;
    state: typings.StateDefine;
    render(): JSX.Element;
}
