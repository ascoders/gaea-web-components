import * as React from 'react'
import * as typings from './swiper.type'
import * as Swiper from 'react-slick'

import './swiper.scss'
import './react-slick.scss'
import './react-slick-theme.scss'

export default class SwiperComponent extends React.Component <typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    render() {
        const SliderSettings = {
            dots: this.props.dots,
            speed: this.props.speed,
            autoplay: this.props.autoPlay,
            arrows: false,
            autoplaySpeed: this.props.autoPlaySpeed,
            style: this.props.style
        }

        if (React.Children.count(this.props.children) > 0) {
            const childs = React.Children.map(this.props.children, (child, index)=> {
                return (
                    <div key={index}>
                        {child}
                    </div>
                )
            })

            return (
                <div style={this.props.style}
                     className="_namespace">
                    <Swiper {...SliderSettings}>
                        {childs}
                    </Swiper>
                </div>
            )
        } else {
            return (
                <div style={this.props.style}
                     className="_namespace">
                    {this.props.children}
                </div>
            )
        }
    }
}