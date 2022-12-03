import React,{useState} from 'react'
import '../About/About.css'
import data from './data';
import  {Questions}  from '../../components/Questions/Questions';

const About = () => {
    const [items ,setItem] = useState(data);
  return (
    <div id="about us" className='container-pad'>
      
      <div className="service-title">
        <h1 >About The Company</h1>
        
        </div>

        <div className="barr"><div className="bar"></div></div>
    <div className='about-us' >
        {items.map((item,index)=>{
            return(
            <div className="about-container" key={index}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            </div>
            )
        })}
        

    </div>
    {/* <Questions/> */}
    </div>
  )
}

export default About