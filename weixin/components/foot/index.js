





import React,{Component} from "react"
import {Link} from "react-router"

export default class Wechat extends Component{
    static defaultProps = {
        footList:[
            {path:"/wechat/微信",txt:"微信",icon:"icon-xiaoxi"},
            {path:"/contact/通讯录",txt:"通讯录",icon:"icon-tongxunlu"},
            {path:"/find/发现",txt:"发现",icon:"icon-faxian"},
            {path:"/my/我",txt:"我",icon:"icon-iconfontwohover"},
        ]
    }

    handleClick=(e)=>{

    }

    render(){
        const {changeTitle} = this.props;
        return (
            <div className="foot">

                    {
                        this.props.footList.map((item,d)=>{
                            return (
                                <Link key={d} to={item.path} activeClassName="active" onClick={()=>changeTitle(item.txt)}>
                                    <i className={"iconfont "+item.icon}></i>
                                    <span>{item.txt}</span>
                                </Link>
                            )
                        })
                    }
            </div>
        )
    }
} 