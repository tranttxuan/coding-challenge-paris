import React, { Component } from 'react';


export default class CustomizeImage extends Component {
      state = {
            size: 0,
            url: ''
      }
      handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
      }
      render() {
            const { size, url } = this.state;
            return (
                  <div >
                        <h1>Customize Image</h1>

                        <div>
                              <input
                                    name="url"
                                    value={url}
                                    onChange={this.handleChange}
                                    type="text"
                              />
                        </div>

                        <div>
                              <input
                                    name="size"
                                    value={size}
                                    onChange={this.handleChange}
                                    type="range"
                                    min={0}
                                    max={200}
                                    className="range"
                              />
                        </div>

                        <p>{size} x {size} px</p>

                        <img src={url} width={size} height={size} alt='image' />



                  </div>
            )
      }
}
