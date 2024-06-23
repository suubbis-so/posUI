import React from 'react';
import closeIcon from '../images/manageCustomer/x.png'
import arrowLeft from '../images/manageCustomer/arrow-left.png'
import arrowRight from '../images/manageCustomer/arrow-right.png'
import search from '../images/manageCustomer/search.png'

function ManageCustomer() {
    return (
        <div className='bg-primary-manage  w-full h-full  absolute top-0 left-0 z-20'>
            <div className='py-6  bg-primary-white rounded-lg ' style={{width:'60%',margin:'15%'}}>
                <div className='flex justify-between px-5 border-b-2 pb-5'>
                    <h5 className='capitalize font-bold text-lg '>manage customer</h5>
                    <img className='self-center cursor-pointer hover:opacity-70' src={closeIcon} />
                </div>
                <div className='px-4 py-6 flex gap-2 border-b-2 border-r-2 mr-6'>
                    <img className='self-center' src={search} />
                    <input className='capitalize outline-none' placeholder='search customer' />
                </div>

                <div className='flex justify-between p-4'>
                    <div className='flex gap-5 border-2 px-4  rounded-full'>
                        <button className='flex gap-2  hover:opacity-70'>
                            <img className='self-center' src={arrowLeft} alt='previous arrow icon'/>
                            <span className='self-center capitalize font-bold text-primary-blackish'>previous</span>
                        </button>
                        <p className='self-center border-l-2 border-r-2 hover:opacity-70 px-4 py-2 font-bold'>1</p>
                        <button className='flex gap-2 hover:opacity-70'>
                            <span className='self-center capitalize font-bold text-primary-blackish'>next</span>
                            <img className='self-center' src={arrowRight} alt='next arrow icon'/>
                        </button>
                    </div>

                    {/* buttons */}
                    {/* <div>
                        <button>cancel</button>
                        <button>new customer</button>
                    </div> */}

                </div>
                
            </div>
        </div>
    );
}

export default ManageCustomer;