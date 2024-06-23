import React from 'react';
import LeftSection from './left';
import RightSection from './right';
import QuickAction from './quickAction';
import discount from '../images/Discount.png'
import shopifyIcon from '../images/Shopify Payments.png'
import cash from '../images/leftHero/Cash.png'
import leftArrow from '../images/leftHero/Arrow left.png'

function Hero() {
    return (
        <>
        <div className='grid grid-cols-3 p-2 '>
            <div className=' col-span-2'>
                <div className=''>
                    <LeftSection />       
                </div>
                 <QuickAction />  
                 <div className='grid grid-cols-4 gap-3 px-2'>
                    <div className='p-4 bg-primary-white border-2 border-primary-gray shadow-black-500/40  rounded-lg'>
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase text-primary-blackish'>discount</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 px-6 border-4 border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={shopifyIcon} />
                            <p className='uppercase text-primary-blackish'>tax</p>
                        </div>
                        <p className='mt-3'>-% 10.332</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    
                    <div className='p-4 border-4 border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={cash} />
                            <p className='uppercase text-primary-blackish'>suptotal</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 border-4 border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center ' src={cash} />
                            <p className='uppercase text-primary-blackish'>total</p>
                        </div>
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6' style={{fontSize:'1.6em'}}>$100.332</p>
                    </div>
                 </div>
                 <button className='bg-primary-orange my-4 p-8 mx-4 flex justify-center gap-6 rounded-md cursor-pointer hover:opacity-80' style={{width:'100%'}}>
                    <img className='self-center' src={leftArrow} alt='left arrow'/>
                    <span className='self-center uppercase text-primary-white font-bold text-lg' style={{fontSize:'2rem'}}>pay all</span> 
                </button>

            </div>
            <div className=''>
                <RightSection />
            </div>
        </div>

        </>
    );
}

export default Hero;