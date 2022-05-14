import React from 'react'
import Cards from '../components/cardUI/Cards'
import NavBar from '../components/navbar'

function Home() {
  return (
    <React.Fragment>
      <>
        <div className='container-fluid'>
          <NavBar />
        </div>
        <Cards />
      </>
    </React.Fragment>
  )
}

export default Home