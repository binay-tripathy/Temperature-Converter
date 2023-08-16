import React from 'react'
import Converter from './Converter'

const Layout = () => {
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">

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