import React, { Component } from 'react'

export class BulbOnOff extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bulbStatus: false
		}
		this.turnOnOff = this.turnOnOff.bind(this)
	}

	turnOnOff() {
		this.setState((prevState) => ({
			bulbStatus: !prevState.bulbStatus
		}))
	}

	render() {
		let { bulbStatus } = this.state
		let style = {
			buttonStyle: {
				fontSize: "1.2em",
				padding: "10px",
				borderRadius: "10px",
				margin: "5px"
			},
			imgStyle: {
				height: '400px',
				margin: '20px'
			}
		}
		return (
      <>
        <img
          src={
            bulbStatus
              ? "https://www.w3schools.com/js/pic_bulbon.gif"
              : "https://www.w3schools.com/js/pic_bulboff.gif"
          }
          alt="Bulb"
          style={style.imgStyle}
        />
        <br />
        <button style={style.buttonStyle} onClick={this.turnOnOff}>ON/OFF</button>
      </>
    );
	}
}
export default BulbOnOff