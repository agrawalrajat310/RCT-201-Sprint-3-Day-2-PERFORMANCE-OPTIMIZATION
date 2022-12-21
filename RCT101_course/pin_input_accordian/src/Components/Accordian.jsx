import React, { useState } from 'react'
import './accordian.css'


export const Accordian = ({data}) => {

const [opened, setOpened] = useState(0)
    
const handleOpen=(index)=>{
    setOpened( index)
    }

  return (
    <div className='flex'>
        {
            data.map((el, index)=>(
                <Card key={index} 
                isVisible={index===opened} 
                 title={el.title} 
                 desc={el.desc} 
                 index={index}
                 handleOpen={handleOpen}
                 
                 />
                
                
            ))
        }
        
      
    </div>
  )
};



 const Card = ({ title, desc,isVisible, handleOpen, index})=>{

    return (
        <div className='accordianContiner' >

            <button onClick={()=>handleOpen(index)} style={{backgroundColor: isVisible ? "teal" : ""}}>{title}</button>
        { isVisible && <p>{desc}</p>}
        </div>
    )
}


