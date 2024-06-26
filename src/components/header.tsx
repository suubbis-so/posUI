import React, { useEffect, useState } from 'react';
import frame from '../images/Frame.png'
import vector from '../images/Vector.png'
import wifiIcon from '../images/wifi.png'
import lockIcon from '../images/Lock.png'
import conten from '../images/Content.png'
import { FaBars,FaWifi,FaTimesCircle } from 'react-icons/fa'

function Header(props) {
    
   function getMonthName(date,locale='default'){
    return date.toLocaleString(locale,{month:'long'})
   }
    const date = new Date    
    const month = getMonthName(date) //getting month by name
    const day = date.getDate() //getting day by number
    const year = date.getFullYear() //getting year
    const hours = date.getHours() //getting hours
    const minutes = date.getMinutes() //getting minutes
   
    return (
        <div className='flex bg-primary-white py-3 px-6 align-middle justify-between border-b-2'>
            <div className='logoSec'>
                <img src={frame} />
                {/* <FaBars className='cursor-pointer self-center hover:text-orange-500 md:hidden' onClick={props.toggleMenu}/> */}
            </div>
            <div className='flex gap-5 align-middle' >
                <div className='hidden md:flex gap-7  '>
                    <img className=' self-center' src={vector}/>
                    <p className=' self-center font-bold capitalize'>{month} {day}th {year},{hours}:{minutes<=9? `0${minutes}`:minutes}</p>
                </div>
                <div className='flex gap-7 align-middle '>
                    <img className=' self-center' src={wifiIcon} />
                    {/* <img className='self-center' src={isConnected? FaWifi : FaTimesCircle} /> */}
                    {/* {isConnected? <FaWifi className='self-center' />:'hello'} */}
                    <img className=' self-center' src={lockIcon} />
                    <span className=' bg-primary-black text-primary-white self-center py-2 px-4 capitalize rounded-full'>a</span>
                    <img className='hidden md:flex self-center cursor-pointer' src={conten} />
                </div>
            </div>
        </div>
    );
}

export default Header;