import React from 'react';
import LeftSection from './left';
import RightSection from './right';
import QuickAction from './quickAction';
import discount from '../images/Discount.png'
import shopifyIcon from '../images/Shopify Payments.png'
import cash from '../images/Cash.png'

function Hero() {
    return (
        <>
        <div className='grid grid-cols-3 p-2 gap-2'>
            <div className='col-span-2'>
                <LeftSection />       
                 <QuickAction />  
                 <div className='flex gap-3'>
                    <div className='p-4 border bg-primary-grayish shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase'>discount</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 border bg-primary-grayish shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase'>tax</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 border bg-primary-grayish shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase'>suptotal</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 border bg-primary-grayish shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center ' src={cash} />
                            <p className='uppercase text-primary-blackish'>total</p>
                        </div>
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6' style={{fontSize:'1.6em'}}>$100.332</p>
                    </div>
                 </div>

            </div>
            <div className=''>
                <RightSection />
            </div>
        </div>

        </>
    );
}

export default Hero;