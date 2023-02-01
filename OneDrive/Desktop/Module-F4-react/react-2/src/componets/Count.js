import React, { Component } from 'react'

 class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this)
    this.increment5 = this.increment5.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  // increment() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  increment() {
    this.setState((prevState)=>({
      
      count: prevState.count + 1
      
    }))
  }
  increment5() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    

  }
  decrement(){
    this.setState({
      count: this.state.count-1
    })
  }
  render() {
    const { count} =this.state
    let style = {
      countStyle: {fontSize: '10em', margin: 0},
      buttonStyle: {
        fontSize: "1.2em",
        padding: "10px",
        borderRadius: "10px",
        margin: "5px"
      }
    }
   
    //const {count, firstName, lastName} =this.state
    return (
      <>
       <p style={style.countStyle}>{count}</p>
       <button style ={style.buttonStyle} onClick={this.increment}> Increment</button>
       <button style ={style.buttonStyle} onClick={this.increment5}> Increment5</button>
       <button style ={style.buttonStyle} onClick={this.decrement}> Decrement</button>
      
      </>
     
    )
  }
}

export default Count
