import React from 'react';
import plus from '../images/subHeader/Frame 162.png'
import searchframe from '../images/subHeader/Frame 150.png'
import addPerson from '../images/subHeader/Add customer.png'
import refreshArrow from '../images/subHeader/Refresh.png'
import noteIcon from '../images/subHeader/note.png'
import clock from '../images/clock.svg'
import receipt from '../images/subHeader/receipt.png'
function SubHeader(props) {
    return (
        <div className='grid grid-cols-2 lg:flex bg-primary-white gap-7 align-middle p-3 pl-5'>
         <div onClick={props.toggleAddCustomer}>
            <img className='self-center cursor-pointer' src={plus} alt='plusIcon'/>
         </div>
         <select className='self-center bg-primary-white text-primary-orange uppercase border-2 p-4 pr-12 font-bold rounded-lg'>
            {/* <p className='text-primary-orange uppercase text-xs border self-center p-4 pr-12 font-bold rounded-lg'>walk-in-customer</p> */}
            <option className=''>walk-in-customer</option>
            <option className=''>online-customer</option>
            <option className=''>vip-customer</option>
         </select>
         <div className='flex gap-3 p-4 py-2 bg-primary-gray border rounded-lg'>
            <input type='text' className=' self-center font-xs outline-none' placeholder='search products... ' style={{background:'none'}} />
            <img className='self-center' src={searchframe} />
         </div>
        <div className='bg-primary-orange flex align-middle gap-2 p-4 rounded-lg px-3' >
            <img className='self-center ' src={addPerson} alt='person icon'/>
            <button className='self-center text-primary-white uppercase text-sm font-bold' onClick={props.toggleManage}>customer list</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg '>
            <img className='self-center' src={refreshArrow} alt='refresh arrow' />
            <button className='self-center uppercase text-primary-blackish font-bold'>return items</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg text-primary-blackish  hover:text-primary-white  hover:bg-primary-orange'>
            <img className='self-center' src={noteIcon} alt='refresh arrow' />
            <button className='self-center uppercase font-bold'>order</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg  text-primary-blackish hover:text-primary-white   hover:bg-primary-orange ' onClick={props.toggleHoldList}>
            <img className='self-center clock' src={clock} alt='refresh arrow' />
            {/* <svg className='self-center clock' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="12" cy="12" r="9" stroke="#828487" stroke-width="1.5"/>
               <path d="M12 6.5V11.9586C12 11.9851 11.9895 12.0105 11.9707 12.0293L9 15" stroke="#828487" stroke-width="1.5" stroke-linecap="round"/>
            </svg> */}

            <button className='self-center uppercase font-bold ' >hold list</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg text-primary-blackish hover:text-primary-white   hover:bg-primary-orange ' >
            <img className='self-center' src={receipt} alt='refresh arrow' />
            <button className='self-center uppercase  font-bold'>invoice list</button>
         </div>
        </div>
    );
}

export default SubHeader;