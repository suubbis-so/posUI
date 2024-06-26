import React from 'react';
import closeIcon from '../images/manageCustomer/x.png'

function AddCustomer(props) {
    return (
        <div className='bg-primary-manage  w-full h-5/6 absolute top-40 left-0 z-20 backdrop-blur-sm' style={{display: props.addCustomer? 'block':'none'}}>
            <div className='py-6  bg-primary-white rounded-lg mx-2 md:w-3/4 md:mx-20 lg:w-2/4 lg:mx-80 mt-3' >
                <div className='flex justify-between px-5 border-b-2 pb-5'>
                {/*width:'45%' style={{margin:'3% 25%'}} */}
                        <h5 className='capitalize font-bold text-lg '>add customers</h5>
                    <img className='self-center cursor-pointer hover:opacity-70' src={closeIcon} onClick={props.toggleAddCustomer}/>
                </div>
                <form className='py-3 px-5 grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>name</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter name' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm capitalize text-sm font-bold text-primary-blackish'>phone number</label>
                            <input className='outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter phone number' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>email</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='email' placeholder='Enter email address' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm capitalize text-sm font-bold text-primary-blackish'>sex</label>
                            <select className='border py-2 px-3 rounded-md capitalize' style={{background:'none'}}>
                                <option>male</option>
                                <option>female</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-sm font-bold text-primary-blackish'>Date of birth</label>
                            <div className='flex flex-col lg:flex-row gap-2'>
                                <select className='capitalize px-7 py-2 border rounded-md' style={{background:'none'}}>
                                    <option >day</option>
                                </select>
                                <select className='capitalize px-7 py-2 border rounded-md' style={{background:'none'}}><option className='month'>month</option></select>
                                <select className='capitalize px-7 py-2 border rounded-md' style={{background:'none'}}><option className='capitalize'>year</option></select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm capitalize text-sm font-bold text-primary-blackish'>customer group</label>
                            <select className='border py-2 text-md px-3 rounded-md' style={{background:'none'}}>
                                <option>select customer group</option>
                            </select>
                        </div>
                    </div>
                    {/* right section of the form */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>Delivery area</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter delivery area' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm capitalize text-sm font-bold text-primary-blackish'>select location/branch</label>
                            <select className='border py-2 text-md px-3 rounded-md' style={{background:'none'}}>
                                <option>select location/Branch</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>building</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter building' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>street</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter street' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='capitalize text-sm font-bold text-primary-blackish'>city</label>
                            <input className='text-sm outline-none border py-2 px-2 rounded-md' type='text' placeholder='Enter city' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm capitalize text-sm font-bold text-primary-blackish'>country</label>
                            <select className='border py-2 text-md px-3 rounded-md' style={{background:'none'}}>
                                <option>country</option>
                            </select>
                        </div>
                    </div>
                </form>

                {/* buttons section */}
                <div className='flex justify-center gap-4 mt-3'>
                    <button className='py-1 px-10  border border-primary-orange rounded-md text-primary-orange font-bold hover:opacity-60 '>cancel</button>
                    <button className='py-1 px-10  bg-primary-orange rounded-md text-primary-white font-bold hover:opacity-60 '>save</button>
                </div>
            </div>
            
        </div>
    );
}

export default AddCustomer;