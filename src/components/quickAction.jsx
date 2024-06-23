import React from 'react';
import clock from '../images/subHeader/clock.png'
import cash from '../images/Cash.png'
import split from '../images/Split payment.png'

function QuickAction() {
    return (
        <div className='flex gap-3 my-6 mx-3'>
            <div className='flex gap-3 p-4 py-2 bg-primary-red border rounded-lg'>
                <img className='self-center' src={clock} />
                <span className='self-center uppercase text-primary-white font-bold'>hold</span>
            </div>
            <div className='bg-primary-blue flex align-middle gap-2 py-2 rounded-lg px-3'>
                <img className='self-center ' src={split} alt='person icon'/>
                <span className='self-center text-primary-white uppercase text-sm font-bold'>multiple</span>
            </div>
            <div className='border flex bg-primary-yellowish py-2 px-4 align-middle gap-2 rounded-lg '>
                <img className='self-center ' src={cash} alt='refresh arrow' />
                <span className='self-center text-primary-white uppercase font-bold'>cash</span>
         </div>
         <div className='flex gap-2'>
            <input className='self-center' type='checkbox' />
            <span className='capitalize self-center'>send customer <span className='uppercase'>sms</span> </span>
         </div>
        </div>
    );
}

export default QuickAction;