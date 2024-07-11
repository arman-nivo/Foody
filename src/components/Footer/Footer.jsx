import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id= "footer">
      <div className="footer_content">
        <div className="footer_left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, nesciunt nisi ullam reiciendis recusandae sequi commodi. Omnis deleniti, aliquam earum architecto at aspernatur alias. Consequatur, adipisci exercitationem molestias consectetur rerum, voluptate impedit animi quisquam debitis beatae eaque minus nulla itaque assumenda placeat incidunt numquam modi qui sequi, perspiciatis ex reprehenderit!</p>
            <div className="social_icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer_center">
            <h1>CodeCrafters</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer_left">
            <h2>Get In Touch </h2>

            <ul>
                <li>+800 1531768342</li>
                <li>amiarman932@gmail.com</li>
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
