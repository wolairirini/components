import React,{Component} from "react"
import ReactSwipe from "../../components/reactswipe";

export default class Wechat extends Component{
    constructor(props){
        super(props);
        this.state={
            imgList:[]
        }
    }
    componentDidMount(){
        this.setState({
            imgList: [
                <img key="1" className="img" src={require("../../../../assets/images/slide1.png")}/>,
                <img key="2"  className="img" src={require("../../../../assets/images/slide2.png")}/>,
                <img key="3" className="img" src={require("../../../../assets/images/slide3.png")}/>,
                <img key="4" className="img" src={require("../../../../assets/images/slide4.png")}/>
            ]
        })
    }
    render(){
        
        return (
            <div>
                <h1>hello mine</h1>
                <ReactSwipe swipeOptions={{
                    autoplay:true,
                    loop:true,
                    effect:"slide"
                }}>
                {
                   this.state.imgList
                }

                </ReactSwipe>
            </div>
        )
    }
} 