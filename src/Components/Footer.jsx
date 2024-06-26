import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  useContext(ContextGlobal)

  return (
    <footer>
        <button className='back-to-top' onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>VOLVER ARRIBA</button>
        <div className='footer-container'>
          <div className='footer-img'>
            <p>Powered by</p>
            <img src="/images/DH.png"  alt='DH-logo'/>
          </div>
          <div className='social-media'>
            <a href="https://www.facebook.com/?locale=es_LA" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.tiktok.com" rel="noreferrer" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.whatsapp.com" rel="noreferrer" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer