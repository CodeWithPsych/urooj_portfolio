import React from 'react'
import './socialLink.css'
import insta from '../../images/instagram.png'
import fb from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import LinkedIn from '../../images/linkedin.png'
const SocialLinks = () => {
  return (
 <div className="socialSection">
 <a href="https://www.instagram.com/freelancebyurham?igsh=anhhemo4dGE4bnd2" target='blank'><img src={insta} className='c1' alt="Instagram" /></a>
 <a href="https://www.facebook.com/profile.php?id=100094852413381&mibextid=ZbWKwL" target='blank'><img src={fb} className='c2' alt="Facebook" /></a>
 <a href="https://x.com/urooj_kharal?t=nJJ_A2ayuS_Cemj7XXE2PQ&s=09" target='blank'><img src={twitter} className='c3' alt="X" /></a>
 <a href="https://www.linkedin.com/in/urooj-kamran-9634a3287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><img src={LinkedIn} className='c4' alt="LinkedIn" /></a>
 </div>
  )
}

export default SocialLinks