import React from 'react'
import CalNumber from '../CalNumber'
class Calculate extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
            const numAray=[0,1,2,3,4,5,6,7,8,9];
            const numList = numAray.map((index)=>{
                console.log(index)
                return (
                    <CalNumber value={index}/>
                    )
                }
            );
        return (
            <div className= 'calculator'>
                <div className="screen" >Screen</div>
                <div className="solve">Solve</div>
                <div className="clear">AC</div>
                <ul className="num-list">
                        {numList}
                </ul>
            </div>
        )
    }
}

export default Calculate;