import React from 'react';
import '../CSS/Service.css'

export default function Service() {
  const serviceData = [
    {
      icon: "ri-seo-line",
      title : 'SEO',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt temporibus dolore dicta nisi, itaque fuga laudantium eum mollitia provident!"
    },
    {
      icon: "ri-refund-2-fill",
      title : 'PPC',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt temporibus dolore dicta nisi, itaque fuga laudantium eum mollitia provident!"
    },
    {
      icon: "ri-dv-fill",
      title : 'Social Media',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt temporibus dolore dicta nisi, itaque fuga laudantium eum mollitia provident!"
    },
    {
      icon: "ri-film-fill",
      title : 'Content Creation',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt temporibus dolore dicta nisi, itaque fuga laudantium eum mollitia provident!"
    }
  ]
  return (
    <section id='service'>
      <div className="container">
        <div className="service_top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Manage Your Business with</h2>
          <h2 className="highlight">Our Best Service</h2>
        </div>
        <div className="service_item-wrapper">
          {
            serviceData.map((item,index) => (
              <div className="services_item" key={index}>
              <span className="service_icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service_title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
