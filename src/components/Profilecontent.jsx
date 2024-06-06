import React, { Component } from 'react'

export default class Profilecontent extends Component {
  render() {
    return (
      <div className='container-fluid ProfileContainer'>
        <div className='row align-items-center justify-content-center h-100 flex-column'>
          <div className='row justify-content-center'>
            <div className='col-9'>
              <span className='ProfileSpan'>Profile</span>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-3'>
              <div className='col-12 ProfileHeader mb-2'>Basic Information</div>
              <div className='row ProfileContent mb-2'>
                <div className='col'>Doğum Tarihi</div>
                <div className='col'>24.03.2024</div>
              </div>
              <div className='row ProfileContent mb-2'>
                <div className='col'>İkamet Şehri</div>
                <div className='col'>Ankara</div>
              </div>
              <div className='row ProfileContent mb-2'>
                <div className='col'>Eğitim Durumu</div>
                <div className='col'>Hacettepe Ünv.  Biyoloji Lisans, 2016</div>
              </div>
              <div className='row ProfileContent mb-2'>
                <div className='col'>Tercih Ettiği Rol</div>
                <div className='col'>Frontend, UI</div>
              </div>
            </div>
            <div className='col-3' style={{justifyContent: "center", display: "flex"}}>
              <div className='ImageDiv2'></div>
            </div>
            <div className='col-3 flex flex-col gap-12'>
              <div className='col-12 ProfileHeader'>HAKKIMDA</div>
              <div className='col-12 ProfileContent'>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                </p>
                <p>
                  Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
              </div>
            </div>
          </div>

        </div>
        {/* <div className='ProfileText'>Profile</div>
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
        </div> */}
      </div>
    )
  }
}
