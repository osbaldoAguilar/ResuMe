import React from 'react';
import Calculate from '../../components/CalculatorBranch/Calculate'

class Calculator extends React.Component{

    render(){
        return (
            <div className= 'calculator-container'>
                <h6 className="cal-title">THE CALCULATOR</h6>
                <Calculate/>
                </div>
        )
    }
}

export default Calculator
 