import React,{Component} from "react"

export default class Wechat extends Component{
    goDetail=()=>{
        this.props.router.push("/finddetail/发现")
    }
    render(){
        return (
            <div>
                <h1 onClick={this.goDetail}>hello find</h1>
            </div>
        )
    }
} 