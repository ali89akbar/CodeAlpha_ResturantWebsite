import React from 'react'

const About = () => {
  return (
    <div className="abouts" id='about'>
        <div className="container">
     <div className="row">
        <div className="col-6 p-25">
        <h2>About Us</h2>
            <h1>Welcome to Delicious Pizza</h1>
        <p>Delight your taste buds with our mouthwatering pizza creations at Delicious Pizza Restaurant.
             Our expert chefs craft each pizza with the finest ingredients, ensuring a perfect blend of flavors in every bite.
              Join us for an unforgettable dining experience that will leave you craving more.</p>
        <div className="about-btn">
            <a href="#client" className='btn btn-smart'>Read More</a>
        </div>
        
        </div>
        <div className="col-4">
            <div className="about-img">
                <img src="/img/menu7.jpg" alt="" /></div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default About