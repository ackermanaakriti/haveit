import React, { useState } from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaPhoneAlt, FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { navlinks } from '../../Data/navlinks'
import { act } from 'react-dom/test-utils'

const Navbar = () => {
    const [activeLink,setactiveLink] = useState()
    const navigate = useNavigate();
    const hanldeLinkClick=(slug)=>
    {
       
            setactiveLink(slug)
        
        // navigate(`/${slug}`)

    }
  return (
   <>
   <div className=' pt-[30px] pb-[10px]  bg-white  sticky '>
    <div className='flex justify-center gap-[50px] items-center w-[100%] '>
        <div className=' flex justify-start'>
        <Link  to='/'>
        <img src="./images/logo2.png" className='h-[50px]' alt="logo" />
        </Link>
        </div>
       

        <div  className='   items-center] '>
            <div className='flex justify-between gap-[20px]'>
                {
                    navlinks?.map((navlists,index)=>
                    (
                        <Link activeClassName='text-white'  to={`/${navlists.slug}`}  
                        className={`text-[20px] font-semibold uppercase opacity-12 ` }>{navlists.name}</Link>
                    ))
                }
        
            </div>
            
        </div>

        <div className=''>
            <div className='flex gap-[35px]'>
            <FaPhoneAlt className='text-logoGreen text-[25px]'/>
             <FaSearch className='text-logoGreen text-[25px]'/>
            </div>
             
        </div>
    </div>

   </div>
   </>
  )
}

export default Navbar