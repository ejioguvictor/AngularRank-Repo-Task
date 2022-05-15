import React from 'react'
import Cards from '../components/cardUI/Cards'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar'

function Home() {
  return (
    <React.Fragment>
      <>
        <div className='container-fluid'>
          <NavBar />
        </div>
        <Cards />
        <Footer />
      </>
    </React.Fragment>
  )
}

export default Home

