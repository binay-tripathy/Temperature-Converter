import React from 'react'
import './Layout.css'
import Converter from './Converter'
import ClimateChange from './stockvideo_05463.mp4'

const Layout = () => {
  return (
    <>
      <section className="vh-100" >
        <video autoPlay muted preload='auto' loop id="myVideo" style={{ width: "100%", height: "auto", pointerEvents: "none" }}>
          <source src={ClimateChange} type="video/mp4" />
        </video>
        <div className="container h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-5">

              <Converter />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Layout