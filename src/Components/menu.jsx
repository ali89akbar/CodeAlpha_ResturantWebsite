import React from 'react'

const Menu = () => {
  return (
    <div className="abouts" id='menu'>
        <div className="container">
     <div className="row">
        <div className="col-4">
        
            <div className="about-img">
                <img src="/img/mennu4.jpg" alt="" /></div>
        
        
        </div>
        <div className="col-6 p-25">
                <h2>Our Menu</h2>
            <h1>  JUICY <br></br>
               BEEF BURGER</h1>
        <p>Delight your taste buds with our mouthwatering pizza creations at Delicious Pizza Restaurant.
             Our expert chefs craft each pizza with the finest ingredients, ensuring a perfect blend of flavors in every bite.
              Join us for an unforgettable dining experience that will leave you craving more.</p>
        <div className="about-btn">
            <a href="#cart" className='btn btn-smart'>View More</a>
        </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Menu