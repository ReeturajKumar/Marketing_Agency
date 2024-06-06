import React from 'react'
import '../CSS/Counter.css'

export default function Counter() {
  const counterData = [
    {
      number: 100,
      text: 'Clients'
    },
    {
      number: 200,
      text: 'Running Project'
    },
    {
      number: 500,
      text: 'Projects Completed'
    },
  ]
  return (
    <section className="counter">
      <div className="container">
        <div className="counter_wrapper">
          {
            counterData.map((item,index) => (
              <div className="counter_item" key={index}>
              <h3 className="counter_number">{item.number} +</h3>
              <h3 className="counter_title">{item.text}</h3>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
