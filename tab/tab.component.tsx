import * as React from 'react'
import * as typings from './tab.type'
import * as _ from 'lodash'
import './tab.scss'

export default class TabComponent extends React.Component<typings.PropsDefine, typings.StateDefine> {
    static defaultProps: typings.PropsDefine = new typings.Props()
    public state: typings.StateDefine = new typings.State()

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps: typings.PropsDefine) {

    }
    componentDidMount() {
        this.refs['contain'] && ((this.refs['contain'] as any).addEventListener("click", (e:any)=>{
            if (e.target && e.target.className && e.target.className.match(new RegExp('(\\s|^)' + 'tab-header-item' + '(\\s|$)'))) {
                this.tabHandleClick(e.target.dataset.index)
            }
        }))
    }

    tabHandleClick = (index: number) => {
        this.setState({
            activeTab: +index
        })
    }

    render() {
        let tabHeader: any[] = [];
        // _.times(this.props.tabNum || 1, (index) => {
        //     tabHeader.push(<div className='gaea-tab-header-item'>tab|</div>)
        // })

        let childs: any;
        if (React.Children.count(this.props.children) > 0) {

            const tabContents = React.Children.map(this.props.children, (child, index) => {
                let activeTab = typeof this.state.activeTab !== 'undefined' ? this.state.activeTab : this.props.activeTab
                tabHeader.push(
                    <div className={'tab-header-item ' + (index === activeTab ? 'active' : '')} key={`header` + index} data-index ={ index }>
                        <span>tab</span>
                    </div>
                )


                return (
                    <div key={index} className={'tab-content-item ' + (index === activeTab ? 'active' : '')} >
                        {child}
                    </div>
                )
            })

            childs = <div className='tab'>
                <div className='tab-header'>
                    {tabHeader}
                </div>
                <div className='tab-content'>
                    {tabContents}
                </div>
            </div>
        } else {
            childs = <div style={{ height: '30px' }}>{this.props.children}</div>
        }

        return <div style={this.props.style}
            className="_namespace" ref='contain'>
            {childs}
        </div>
        // if (this.props.gaeaPreview) {
        //     return (
        //         null
        //     )
        // } else {
        //     return (

        //     )
        // }
    }
}