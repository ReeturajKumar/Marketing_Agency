import React from 'react'
import '../CSS/Hero.css'
import img1 from '../../assets/1.png'
import lightImg from '../../assets/4.jpg'

export default function Hero({theme}) {
  return (
    <section className="hero_section" id='home'>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
          <div>
            <h2>We're Creating Perfect</h2>
            <h2>Digital Product to</h2>
            <h2 className="highlight">Promote Your Brand
            </h2>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cumque maiores dicta sit expedita dignissimos et at aliquam omnis? Vel veritatis et iusto numquam corrupti suscipit rem, architecto nihil corporis!
            </p>
            <div className="hero_btns">
              <button className="primary_btn">Get Started Now</button>
              <button className="secondary_btn">Discover More</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={ theme === 'light-theme' ?  lightImg : img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
