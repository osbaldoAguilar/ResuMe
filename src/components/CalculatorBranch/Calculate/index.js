import React from 'react'
import CalNumber from '../CalNumber'
class Calculate extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            screenDisplay:"",
          //  auxNum:"",
            baseNum:""
        }
    }

    handleCalButtonClick=(x) =>{
        console.log(x);
        let display = this.state.screenDisplay;
        display += x;
        this.setState({screenDisplay:display})
        }
    
    clearDisplay(){
        this.setState({
            screenDisplay:""
        })
    }
    
    addButt(){
        const baseNum= this.state.screenDisplay;
        this.setState({
            baseNum:baseNum,
            screenDisplay:"",
            mathSymbol:'add'
        },()=>{
          //   console.log(BaseNum);
        })
    }

    minusButt(){
        const baseNum= this.state.screenDisplay;
        this.setState({
            baseNum:baseNum,
            screenDisplay:"",
            mathSymbol:'minus'
        },()=>{})
    }

    timesButt(){
        const baseNum= this.state.screenDisplay;
        this.setState({
            baseNum:baseNum,
            screenDisplay:"",
            mathSymbol:'times'
        })
    }

    divideButt(){
        const baseNum= this.state.screenDisplay;
        this.setState({
            baseNum:baseNum,
            screenDisplay:"",
            mathSymbol:'divide'
        })
    }

    // perButt(){
    //     const baseNum= this.state.screenDisplay;
    //     this.setState({
    //         baseNum:baseNum,
    //         screenDisplay:"",
    //         mathSymbol:'percent'
    //     })
    // }

    solve(){
        const mathSymbol = this.state.mathSymbol;
       // const subtract = this.state.mathSymbol;
        const base = parseFloat(this.state.baseNum);
        const newNum = parseFloat(this.state.screenDisplay);
       // const auxNum = parseFloat(base+'.'+newNum)
        switch (mathSymbol){
            case 'add':
                this.setState({
                    screenDisplay:base + newNum
                });
                break;
            case 'minus':
                this.setState({
                    screenDisplay: base - newNum
                });
                break;
            case 'times':
                this.setState({
                    screenDisplay:base*newNum
                });
                break;
            case 'divide':
                this.setState({
                    screenDisplay:base/newNum
                });
                break;
            // case 'percent':
            //     this.setState({
            //         screenDisplay:base%newNum
            //     });
            //     break;
        }
        // if(arithmetic==='add'){
        //     this.setState({
        //         screenDisplay: base + newNum
        //     })
        // }else if(subtract==='minus'){
        //     this.setState({
        //         screenDisplay: base-newNum
        //     })
        // }
    }

    render(){
            const numAray=[9,8,7,6,5,4,3,2,1,".",0];
            const numList = numAray.map((num)=>{
                // console.log(num)
                return (
                    <CalNumber value={num} key={num} handleButtonClick={this.handleCalButtonClick}/>
                    )
                }
            );
        return (
            <div className= 'calculator'>
                <div className="screen "  >{this.state.screenDisplay}</div>
                <div className="solve operator calButt"onClick={()=> this.solve()}>EQUALS</div> 
                <div className="add operator calButt"onClick={()=>this.addButt()}>+</div>
                <div className="subtract operator calButt"onClick={()=>this.minusButt()}>-</div>
                <div className="divide operator calButt"onClick={()=>this.divideButt()}>/</div>
                <div className="times operator calButt"onClick={()=>this.timesButt()}>X</div>
                {numList}
                <div className="clear operator calButt" onClick={()=>this.clearDisplay()}>Erase</div>
            </div>
        )
    }

}
export default Calculate;