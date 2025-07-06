import React from 'react'
import '../Services/Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='service'>
        <div className="servicetitle">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="img"></img>
        </div>
        <div className="servicecontainer">
            {Services_Data.map((service, index)=>{
                return <div key={index} className="service_format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name} </h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="arrowimg"></img>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services