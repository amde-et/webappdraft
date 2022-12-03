import React,{useState} from 'react';
import data from './data'

import '../Services/Services.css';
import Sector from '../Sector/Sector';

const Services = () => {
    const [items , setItems]= useState(data);
  return (
    <div id="services" className='container-pad'>
        
         <div className="service-title">
        <h1 >Our Service</h1>
        
        </div>

        <div className="barr"><div className="bar"></div></div>
    <div className='services' >
        {items.map((item,index)=>{
            return(
                <div className="services-card" key={index}>
                    <div className="icon-container">{item.icon}</div>            
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
            )
        })}
    </div>
    <Sector/>
    </div>
  )
}

export default Services