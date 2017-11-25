




import React,{Component} from "react"

import {browserHistory} from "react-router"

export default class SubHead extends Component{

    static propTypes ={
        subTitle:React.PropTypes.string
    }

    goBack=()=>{
        console.log(this.props);
        browserHistory.go(-1);
    }

    render(){
        console.log("subHead")
        return (
            <header className="head">
                <div className="goback" onClick={this.goBack}>
                    <i className="iconfont icon-jiantouyou front"></i>
                    <span >{this.props.pTitle}</span>
                </div>

                <span>{this.props.subTitle}</span>
            </header>
        )
    }
} 