


import React,{Component} from "react"

import Foot from "../../components/foot"
import Head from "../../components/head"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Wechat extends Component{

    constructor(props){
        super(props)
        this.state = {
            title:"微信"
        }
    }

    changeTitle=(txt)=>{
        this.setState({
            title:txt
        })
    }

    render(){
        const {title} = this.state;
        // const {changeTitle} = this.props;
        return (
            <div className="moveIn">
                <Head title={title}/>
                <ReactCSSTransitionGroup
                    transitionName = {
                        {
                            enter: 'enter',
                            leave: 'leave',
                        }
                    }
                    transitionLeave={true}
                    transitionEnter={true}
                    transitionLeaveTimeout = {800}
                    transitionEnterTimeout = {800}
                    >
                     <div key={this.props.children.pathname}>
                        {this.props.children}
                    </div>
                    </ReactCSSTransitionGroup>
               
                <Foot changeTitle={this.changeTitle}/>
            </div>
        )
    }

    componentDidMount(){
        const {location} = this.props;
        console.log(location);
        var route = location.pathname.split("/")[1];

        console.log(route);
        var  title = "微信";
        switch(route){
            case "find":
            title = "发现";
            break;
            case "wechat":
            title = "微信";
            break;
            case "contact":
            title = "通讯录";
            break;
            case "my":
            title = "我";
            break;
            default:
            title="微信";
            break;
        }

        this.setState({
            title
        })
    }
} 