import React,{Component} from 'react'

export default class ErrorBoundary extends Component {
    //rconst is the short cut key for this 
    
    constructor(props){
        super(props)
        this.state={
            hasError:false
        };
    }
    static getDerivedStateFromError(){
        return{
            hasError:true.valueOf
        };
    }
  render() {
    if (this.state.hasError){
        return<h1>something went wrong with this product</h1>

    }

    else{
        return<h1>{this.props.children}</h1>
}

  }
}
