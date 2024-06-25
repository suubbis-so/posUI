import React from 'react';
import LeftSection from './left';
import RightSection from './right';
import QuickAction from './quickAction';
import discount from '../images/Discount.png'
import shopifyIcon from '../images/Shopify Payments.png'
import cash from '../images/leftHero/Cash.png'
import leftArrow from '../images/leftHero/Arrow left.png'

function Hero(props) {
    return (
        <>
        <div className='block lg:grid grid-cols-3'>
            <div className=' col-span-2'>
                <div className=''>
                    <LeftSection />       
                </div>
                 <QuickAction />  
                 <div className='grid grid-cols-2 md:grid-cols-4 gap-3 px-2'>
                    <div className='p-4 bg-primary-white border border-primary-gray shadow-black-500/40  rounded-lg hover:border-primary-orange'>
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase text-primary-blackish'>discount</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-4 px-6 border border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg hover:border-primary-orange' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={shopifyIcon} />
                            <p className='uppercase text-primary-blackish'>tax</p>
                        </div>
                        <p className='mt-3'>-% 10.332</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    
                    <div className='p-4 border border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg hover:border-primary-orange ' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={cash} />
                            <p className='uppercase text-primary-blackish '>suptotal</p>
                        </div>
                        {/* <p className='mt-3'>-% 8.88</p> */}
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6 hover:font-bold hover:text-primary-black' style={{fontSize:'1.6em'}}>$ 99.332</p>
                    </div>
                    <div className='p-4 border border-primary-gray bg-primary-white shadow-black-500/40 hover:border-primary-orange  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center ' src={cash} />
                            <p className='uppercase text-primary-blackish'>total</p>
                        </div>
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6 hover:font-bold hover:text-primary-black' style={{fontSize:'1.6em'}}>$ 100.332</p>
                    </div>
                 </div>
                 <div className='p-3 md:p-0'>
                    <button className='bg-primary-orange my-2 p-5 md:p-8 md:mx-2 flex justify-center gap-6 rounded-md cursor-pointer hover:opacity-80' style={{width:'100%'}} onClick={props.toggleConfirm}>
                        <img className='self-center' src={leftArrow} alt='left arrow'/>
                        <span className='self-center uppercase text-primary-white font-bold text-lg' style={{fontSize:'2rem'}}>pay all</span> 
                    </button>
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