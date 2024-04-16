import React, { Component } from 'react'

export default class Profilecontent extends Component {
  render() {
    return (
      <div>
        <div className='ProfileText'>Profile</div>
        <div className='ProfileContent'>
            <div className='Basicİnfo'>
                <h1>Basic Information</h1>
                <div className='Profileİnfo'>
                    <p>Doğum Tarihi</p>
                </div>
            </div>
            <img src="#" alt="" />
            <div className='AboutBox'>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perferendis corporis optio sequi, ex illum non repudiandae ipsa dicta unde, sint ea consequatur necessitatibus placeat asperiores laborum, sapiente porro aperiam!</p>
            </div>
        </div>
     </div> 
    )
  }
}
