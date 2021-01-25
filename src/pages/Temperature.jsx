// import React, { Component } from 'react';
// import "./Temperature.css";

// export default class Temperature extends Component {
//       state = {
//             temperature: 0,
//             message: '',
//             color: ''

//       }
//       handleChange = (event) => {
//             const temperature = event.target.value;
//             this.setState({ temperature });
//             if (temperature <= 10) {
//                   this.setState({ message: "It's cold", color: "blue" });
//                   return;
//             } else if (temperature <= 30) {
//                   this.setState({ message: "It's nice", color: "black" });
//                   return;
//             }else {
//                   this.setState({ message: "It's warm", color: "red" });
//                   return;
//             }

//       }
//       render() {
//             const { temperature, message, color } = this.state;
//             return (
//                   <div className="temp-page">
//                         <h1>Temperature</h1>
//                         <input
//                               name="temperature"
//                               value={temperature}
//                               onChange={this.handleChange}
//                               type="number"
//                               placeholder="Temperature in C"
//                         />
//                         <p style={{ color }}>{message}</p>
//                   </div>
//             )
//       }
// }



import React from 'react'
import { useState } from 'react'
import "./Temperature.css";

function Temperature() {
      const [temperature, setTemperature] = useState(0);
      const [message, setMessage] = useState("");
      const [color, setColor] = useState('')

      const handleChange = (event) => {
            const temperature = event.target.value;
            setTemperature(temperature);
            if (temperature <= 10) {
                  setMessage("It's cold");
                  setColor("blue")

                  return;
            } else if (temperature <= 30) {
                  setMessage("It's nice");
                  setColor("black")
                  return;
            } else {
                  setMessage("It's warm");
                  setColor("red")
                  return;
            }
      
      }
      return (
            <div className="temp-page">
                  <h1>Temperature</h1>
                  <input
                        name="temperature"
                        value={temperature}
                        onChange={handleChange}
                        type="number"
                        placeholder="Temperature in C"
                  />
                  <p style={{ color }}>{message}</p>
            </div>
      )
}

export default Temperature
