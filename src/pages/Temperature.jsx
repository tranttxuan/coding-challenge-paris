import React, { Component } from 'react'

export default class Temperature extends Component {
      state = {
            temperature: 0,
            message: '',
            color: ''

      }
      handleChange = (event) => {
            const temperature = event.target.value;
            this.setState({ temperature });
            if (temperature <= 10) {
                  this.setState({ message: "It's cold", color: "blue" });
                  return;
            } else if (temperature <= 30) {
                  this.setState({ message: "It's nice", color: "black" });
                  return;
            }else {
                  this.setState({ message: "It's warm", color: "red" });
                  return;
            }

      }
      render() {
            const { temperature, message, color } = this.state;
            return (
                  <div>
                        <h1>Temperature</h1>
                        <input
                              name="temperature"
                              value={temperature}
                              onChange={this.handleChange}
                              type="number"
                              placeholder="Temperature in C"
                        />
                        <p style={{ color }}>{message}</p>
                  </div>
            )
      }
}
