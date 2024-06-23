import React from 'react';
import plus from '../images/subHeader/Frame 162.png'
import searchframe from '../images/subHeader/Frame 150.png'
import addPerson from '../images/subHeader/Add customer.png'
import refreshArrow from '../images/subHeader/Refresh.png'
import noteIcon from '../images/subHeader/note.png'
import clock from '../images/subHeader/clock.png'
import receipt from '../images/subHeader/receipt.png'
function SubHeader() {
    return (
        <div className='flex bg-primary-white gap-7 align-middle p-3 pl-5'>
         <div>
            <img className='self-center' src={plus} alt='plusIcon'/>
         </div>
         <div className='self-center'>
            <p className='text-primary-orange uppercase text-xs border self-center p-4 pr-12 font-bold rounded-lg'>walk-in-customer</p>
         </div>
         <div className='flex gap-3 p-4 py-2 bg-primary-gray border rounded-lg'>
            <input type='text' className=' self-center font-xs outline-none' placeholder='search products... ' style={{background:'none'}} />
            <img className='self-center' src={searchframe} />
         </div>
         <div className='bg-primary-orange flex align-middle gap-2 p-4 rounded-lg px-3'>
            <img className='self-center ' src={addPerson} alt='person icon'/>
            <button className='self-center text-primary-white uppercase text-sm font-bold'>customer list</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg '>
            <img className='self-center' src={refreshArrow} alt='refresh arrow' />
            <button className='self-center uppercase text-primary-blackish font-bold'>return items</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg '>
            <img className='self-center' src={noteIcon} alt='refresh arrow' />
            <button className='self-center uppercase text-primary-blackish font-bold'>order</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg '>
            <img className='self-center' src={clock} alt='refresh arrow' />
            <button className='self-center uppercase text-primary-blackish font-bold'>hold list</button>
         </div>
         <div className='border flex py-2 px-4 align-middle gap-2 rounded-lg '>
            <img className='self-center' src={receipt} alt='refresh arrow' />
            <button className='self-center uppercase text-primary-blackish font-bold'>invoice list</button>
         </div>
        </div>
    );
}

export default SubHeader;