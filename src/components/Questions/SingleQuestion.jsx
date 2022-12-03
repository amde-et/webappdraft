import React, { useState } from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {IoIosArrowUp} from 'react-icons/io'

const SingleQuestion = ({item}) => {
    const [showInfo , setShowInfo ]= useState(false);
  return (

    <div className="ques-container" >

                    <div className="ques">
                    <p>{item.question}</p>
                    <i onClick={()=>setShowInfo(!showInfo)}>{showInfo?<IoIosArrowUp/>: <FaAngleDown/>}</i>
                    </div>
                    <div className="details">
                    {showInfo && <p>{item.answer}</p>}
                    </div>
                    
                    
                </div>
  )
}

export default SingleQuestion