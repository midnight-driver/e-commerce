import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div>
              <section>
            <div className="hero">
                <div className="card text-bg-dark">
  <img src="shp.jpg" className="card-img " alt="shop" height={1000} />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
      <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">Latest Arrivals</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
    </div>
  </div>

            </div>
        </div>
        < Products/>
        </section>
        </div>
    )
}

export default Home

