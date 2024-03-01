import React from 'react'
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa'

const Button = ({style,btn,link}) => {
  return (
    <div  >
         <button className=' flex items-center border-[1px] border-white rounded-[24px] px-[20px] py-[8px] text-[22px] text-[white] 
         hover:bg-logoGreen'>{btn} 
         <FaArrowRight className='ml-[10px] text-[20px]' /> </button>
    </div>
  )
}

export default Button