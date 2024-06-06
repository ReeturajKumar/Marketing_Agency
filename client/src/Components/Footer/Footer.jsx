import React from 'react'
import '../CSS/Footer.css'




const quickLinks01 = [
  {
    path: '#',
    display: 'Marketing'
  },
  {
    path: '#',
    display: 'Analytic'
  },
  {
    path: '#',
    display: 'Commerce'
  },
]
const quickLinks02 = [
  {
    path: '#',
    display: 'About'
  },
  {
    path: '#',
    display: 'Contact'
  },
  {
    path: '#',
    display: 'Blog'
  },
]
const quickLinks03 = [
  {
    path: '#',
    display: 'Customer Support'
  },
  {
    path: '#',
    display: 'Documentation'
  },
  {
    path: '#',
    display: 'Guides'
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="ffoter_logo">
            <h2>BrightSpark</h2>
            <p className="desc">Grow with Us</p>
            <p className="small_text desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error exercitationem sapiente commodi sint, fuga voluptatem natus nemo repudiandae fugiat recusandae earum veniam.</p>
          </div>
          <div className="footer_qick-links">
            <h3 className="quick_links-title">Solution</h3>
            <ul className="quick_links">
              {
                quickLinks01.map((item,index)=> (
                  <li className='quick_link-item' key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="footer_qick-links">
            <h3 className="quick_links-title">Company</h3>
            <ul className="quick_links">
              {
                quickLinks02.map((item,index)=> (
                  <li className='quick_link-item' key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="footer_qick-links">
            <h3 className="quick_links-title">Support</h3>
            <ul className="quick_links">
              {
                quickLinks03.map((item,index)=> (
                  <li className='quick_link-item' key={index}>
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright {year}, devloped by Reeturaj Kumar. All rights reserved {" "}</p>
      </div>
    </footer>
  )
}
