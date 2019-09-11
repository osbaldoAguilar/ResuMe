import React from 'react'

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            name:"",
            array:[""]
        }

    }
    handleChange= (e) => { 
        console.log("fire",e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    onSubmit= () => {  
        let newArray = this.state.array
        console.log(newArray)
        newArray.push(this.state.name)
        console.log(newArray)
        this.setState({array:newArray})
    }

    render() {
        return(
            <div>Contact_Page<br/>
            <input name="name"
            value={this.state.name} onChange={this.handleChange} placeholder="name"/>
            <button onClick={this.onSubmit}>Add to Array</button>
            <div>
                {this.state.array}
            </div>
            </div>
        )
    }

}

export default Contact