import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
            <div className="footer-text">
            <h1>Reach us On Social Media</h1>

                <div className="icons">
                     <Facebook className='icon'/>
                    <Instagram className='icon'/>
                    <Twitter className='icon'/>
                    <LinkedIn className='icon'/>
                </div>
                <p>BEK - © All rights reserved</p>

            </div>
    </section>
  )
}

export default Footer