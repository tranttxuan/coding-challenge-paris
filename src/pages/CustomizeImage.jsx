// import React, { Component } from 'react';
// import "./CustomizeImage.css"

// export default class CustomizeImage extends Component {
//       state = {
//             size: 0,
//             url: ''
//       }
//       handleChange = (event) => {
//             const { name, value } = event.target;
//             this.setState({ [name]: value });
//       }
//       render() {
//             const { size, url } = this.state;
//             return (
//                   <div className="customize-image-page">
//                         <h1>Customize Image</h1>

//                         <div>
//                               <input
//                                     name="url"
//                                     value={url}
//                                     onChange={this.handleChange}
//                                     type="text"
//                                     placeholder="Image Url"
//                               />
//                         </div>

//                         <div>
//                               <input
//                                     name="size"
//                                     value={size}
//                                     onChange={this.handleChange}
//                                     type="range"
//                                     min={0}
//                                     max={200}
//                                     className="range"
//                               />
//                         </div>

//                         {url && <p>{size} x {size} px</p>}

//                         {url && <img src={url} width={size} height={size} alt='image' />}



//                   </div>
//             )
//       }
// }



import React from 'react'
import { useState } from 'react'
import "./CustomizeImage.css"
function CustomizeImage() {
      const [size, setSize] = useState('');
      const [url, setUrl] = useState("");
      const handleChange = (event) => {
            const { name, value } = event.target;
            name === "size" ? setSize(value) : setUrl(value)
      }
      return (
            <div className="customize-image-page">
                  <h1>Customize Image</h1>

                  <div>
                        <input
                              name="url"
                              value={url}
                              onChange={handleChange}
                              type="text"
                              placeholder="Image Url"
                        />
                  </div>

                  <div>
                        <input
                              name="size"
                              value={size}
                              onChange={handleChange}
                              type="range"
                              min={0}
                              max={200}
                              className="range"
                        />
                  </div>

                  {url && <p>{size} x {size} px</p>}

                  {url && <img src={url} width={size} height={size} alt='image' />}



            </div>
      )
}

export default CustomizeImage
