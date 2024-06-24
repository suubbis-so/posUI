import React, { useState } from 'react';
import closeIcon from '../images/manageCustomer/x.png'
import arrowLeft from '../images/manageCustomer/arrow-left.png'
import arrowRight from '../images/manageCustomer/arrow-right.png'
import search from '../images/manageCustomer/search.png'

function ManageCustomer() {
    const[isManageOpen,setIsManageOpen] = useState(true)
    function toggle(){
        setIsManageOpen(!isManageOpen)
    }
    return (
        <div className='bg-primary-manage  w-full h-5/6  absolute top-40 left-0 z-20 backdrop-blur-sm' style={{display: isManageOpen? 'block':'none'}}>
            <div className='py-6  bg-primary-white rounded-lg ' style={{width:'60%',margin:'3% 15%'}}>
                <div className='flex justify-between px-5 border-b-2 pb-5'>
                    <h5 className='capitalize font-bold text-lg '>manage customer</h5>
                    <img className='self-center cursor-pointer hover:opacity-70' src={closeIcon} onClick={toggle}/>
                </div>
                <div className='px-4 py-6 flex gap-2 border-b-2 border-r-2 mr-6'>
                    <img className='self-center' src={search} />
                    <input className='capitalize outline-none' placeholder='search customer' />
                </div>
                <div className='py-6 pl-4'>
                    <table className=''>
                        <thead className='border-b-2'>
                            <tr>
                                <th className='py-3 px-4 capitalize font-bold text-primary-blackish text-sm'>customer name</th>
                                <th className='py-3 px-10 capitalize font-bold text-primary-blackish text-sm' >phone number</th>
                                <th className='py-3 px-10 capitalize font-bold text-primary-blackish text-sm'>email address</th>
                                <th className='py-3 px-10 capitalize font-bold text-primary-blackish text-sm'>ref code</th>
                                <th className='py-3 px-10 capitalize font-bold text-primary-blackish text-sm'>city location</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* row1 */}
                            <tr className='border-b-2'>
                                <td className='py-3 px-4 text-sm capitalize'>john sparrow</td>
                                <td className='py-3 px-10 text-sm'>083894771983</td>
                                <td className='py-3 px-10 text-sm'>john.sparrow@mail.com</td>
                                <td className='py-3 px-12 font-bold text-gray-400'> - </td>
                                <td className='py-3 px-10 text-sm'>Sleman, Yogyakarta</td>
                            </tr>
                            {/* row2 */}
                            <tr className='bg-primary-greyishWhite border-b-2'>
                                <td className='py-3 px-4 text-sm capitalize'>bella anisa</td>
                                <td className='py-3 px-10 text-sm'>081829748835</td>
                                <td className='py-3 px-10 text-sm'>bella.anisa27@mail.com</td>
                                <td colSpan={2}  className='px-2'>
                                    <div className='flex gap-4 py-2 px-5'>
                                        <button className='text-sm self-center capitalize  py-1 px-4 self-center text-primary-orange font-bold px-3 border-2 border-primary-orange rounded-lg hover:opacity-60'>display order</button>
                                        <button className='text-sm self-center capitalize py-1 px-2 font-bold bg-orange-50 text-primary-orange rounded'>edit info</button>
                                        <button className='text-xs px-4 self-center font-bold rounded px-2 py-2 capitalize bg-primary-orange text-primary-white'>add to order</button> 
                                    </div>
                                </td>
                            </tr>
                            {/* row3 */}
                            <tr className='border-b-2'>
                                <td className='py-3 px-4 text-sm capitalize'>minimo masasi</td>
                                <td className='py-3 px-10 text-sm'>087837829837</td>
                                <td className='py-3 px-10 text-sm'>minimo45@mail.com</td>
                                <td className='py-3 px-12 font-bold text-gray-400'> - </td>
                                <td className='py-3 px-10 text-sm'>Sleman, Yogyakarta</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

                <div className='flex justify-between p-4'>
                    <div className='flex gap-5 border-2 px-2  rounded-full'>
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
                    <div className='flex gap-2'>
                        <button className='capitalize border border-primary-orange text-primary-orange font-bold  py-1 px-8 text-sm rounded-lg hover:opacity-60'>cancel</button>
                        <button className='capitalize border bg-primary-orange text-primary-white font-bold py-1 px-3 text-sm rounded-lg hover:opacity-60'>new customer</button>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default ManageCustomer;