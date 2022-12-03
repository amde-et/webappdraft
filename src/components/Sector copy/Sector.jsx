import React from 'react'
import data from './data';
import '../Sector/Sector.css'
const Sector = () => {
  return (
    <div className='sector-wrapper'>
        <h1 id='sec-title'> <span style={{color:'rgb(249,157,28)'}}>Sectors</span> we're involved </h1>
        {
            data.map((item,index)=>{
                return(
                    <div className="sec-container" key={index}>
                        <div className="btn-container">
                        <h2><span>{item.icon}</span> {item.title}</h2>
                        </div>
                        <div className="content">
                        <h2> {item.title}</h2>   
                        <p>{item.desc}</p>
                        </div>
                     
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sector