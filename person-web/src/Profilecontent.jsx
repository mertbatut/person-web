import React, { Component } from 'react'

export default class Profilecontent extends Component {
  render() {
    return (
      <div>

        <div className='ProfileContent'>
          <div className='ProfileText'>Profile</div>
          <div className='Basicİnfo'>
            <h1>Basic Information</h1>
            <div className='Profileİnfo'>
              <p>Doğum Tarihi: </p>
              <p>İkamet Şehri: </p>
              <p>Eğitim Durumu: </p>
              <p>Tercih Ettiği Rol: </p>
            </div>
            <div className='ProfileInfo2'>
              <p>24.03.1996</p>
              <p>Ankara</p>
              <p>Hacettepe Ünv.  Biyoloji
                Lisans, 2016</p>
              <p>Frontend, UI</p>
            </div>
          </div>
          <img style={{width:"300px" , height:"290px", borderRadius:"10px"}} src="profile2.png" alt="" />
          <div className='AboutBox'>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta perferendis corporis optio sequi, ex illum non repudiandae ipsa dicta unde, sint ea consequatur necessitatibus placeat asperiores laborum, sapiente porro aperiam!</p>
          </div>
        </div>
      </div>
    )
  }
}
