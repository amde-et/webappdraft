import React, { useState } from 'react'
import data from './data'
import '../Questions/Questions.css';
import {FaAngleDown} from 'react-icons/fa'
import SingleQuestion from './SingleQuestion';
export const Questions = () => {
  const [showInfo , setShowInfo ]= useState(false);
  return (
    <div className='ques-wrapper'>
        <h1>Website and Software Development <span style={{color:'rgb(249,157,28)'}}>FAQ's</span> </h1>
        {data.map((item , index)=>{
            return(
            <SingleQuestion item={item} key={index}></SingleQuestion>
                // <div className="ques-container" key={index}>

                //     <div className="ques">
                //     <p>{item.question}</p>
                //     <i onClick={()=>setShowInfo(!showInfo)}><FaAngleDown/></i>
                //     </div>
                //     {showInfo && <p>{item.answer}</p>}
                    
                // </div>
            )
        })}
        

    </div>
  )
}
