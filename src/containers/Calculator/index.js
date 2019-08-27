import React from 'react';
import Calculate from '../../components/CalculatorBranch/Calculate'

class Calculator extends React.Component{

    render(){
        return (
            <div className= 'calculator-container'>
                <Calculate/>
                </div>
        )
    }
}

export default Calculator