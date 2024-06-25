import React from 'react';

function MultiplePayment(props) {
    return (
        <div className='bg-primary-manage  w-full h-5/6 absolute top-40 left-0 z-20 backdrop-blur-sm' style={{display: props.multiplePayments ? 'block' : 'none'}}>
          <div className='py-6  bg-primary-white rounded-lg w-3/5 my-4 mx-56'>
            <h4 className='text-center font-bold capitalize py-1 text-lg'>multiple payment</h4>
            <p className='text-center text-primary-blackish text-sm '>Please confirm the order below to completed payment</p>
            <div className='grid grid-cols-3 gap-8 my-2 mx-2'>
                <section className='col-span-2'>
                    <form>
                        <div className='p-4 border rounded-lg'>
                            <div className='grid grid-cols-2  gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label className='capitalize font-bold'>amount</label>
                                    <input className='border py-1 px-3 rounded-lg outline-none' type='text' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='capitalize font-bold'>payment type</label>
                                    <select className='bg-primary-gray border border-primary-blackish py-2 px-3 rounded-lg text-sm' style={{width:'100%'}}>
                                        <option>cash</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-1 mt-2'>
                                <label className='capitalize font-bold'>payment note</label>
                                <textarea rows={5} className='mt-2 bg-primary-gray border border-primary-blackish rounded-lg py-1 px-2 text-sm resize-none outline-none col-4'></textarea>
                            </div>
                        </div>
                        
                        <div className='py-3'>
                            <button className='py-1 w-full text-primary-orange font-bold bg-orange-50 text-center rounded-lg hover:bg-orange-100'>add Payment Raw</button>
                        </div>
                        <div className='p-4 border rounded-lg'>
                            <div className='grid grid-cols-2  gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label className='capitalize font-bold'>amount</label>
                                    <input className='border py-1 px-3 rounded-lg outline-none' type='text' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='capitalize font-bold'>payment type</label>
                                    <select className='bg-primary-gray border border-primary-blackish py-2 px-3 rounded-lg text-sm' style={{width:'100%'}}>
                                        <option>cash</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-1 mt-2'>
                                <label className='capitalize font-bold'>payment note</label>
                                <textarea rows={5} className='mt-2 bg-primary-gray border border-primary-blackish rounded-lg py-1 px-2 text-sm resize-none outline-none col-4'></textarea>
                            </div>
                        </div>
                        
                        <div className='py-3'>
                            <button className='py-1 w-full text-primary-orange font-bold bg-orange-50 text-center rounded-lg hover:bg-orange-100'>add Payment Raw</button>
                        </div>
                    </form>
                    
                </section>
                     {/* rightSection */}
                <section>
                    <div className='bg-primary-blackish py-4 px-4 rounded-lg'>
                        <div className='bg-primary-white flex flex-col justify-items-stretch gap-3 p-3 rounded-lg'>
                            <div className='grid grid-cols-2 justify-items-end border-b-2'>
                                <p className='uppercase text-primary-blackish'>total-items</p>
                                <p>x18</p>
                            </div>
                            <div className='grid grid-cols-2 justify-items-end border-b-2'>
                                <p className='uppercase text-primary-blackish'>total</p>
                                <p>$0</p>
                            </div>
                            <div className='grid grid-cols-2 justify-items-end border-b-2'>
                                <p className='uppercase text-primary-blackish'>order discount</p>
                                <p>$0</p>
                            </div>
                            <div className='grid grid-cols-2 justify-items-end border-b-2'>
                                <p className='uppercase text-primary-blackish'>tax</p>
                                <p className=''>$0</p>
                            </div>
                        </div>
                        <div className='bg-primary-white p-4 rounded-lg mt-3'>
                            <p className='text-primary-orange uppercase '>total payable = <span className='text-3xl font-bold'>$99.332</span></p>
                        </div>
                        <div className='bg-primary-white p-4 rounded-lg mt-3'>
                            <div className='grid grid-cols-2  p-3 justify-items-end  border-b-2'>
                                <p className='uppercase text-primary-blackish'>total paying</p>
                                <p>$0.00</p>
                            </div>
                            <div className='grid grid-cols-2 p-3 justify-items-end border-b-2'>
                                <p className='uppercase text-primary-blackish'>balance</p>
                                <p className=''>$100.000</p>
                            </div>
                        </div>
                        <div className='bg-primary-white p-4 rounded-lg mt-3 grid grid-cols-2 justify-items-end'>
                            <p className='text-primary-blackish uppercase self-center'>total payable = </p>
                            <span className='text-3xl font-bold self-center text-primary-blackish'>$0.00</span>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-7 justify-center'>
                        <button className='text-primary-orange text-sm border border-primary-orange py-2 px-6 rounded-lg font-bold capitalize hover:opacity-60' onClick={props.toggleMultiplePayments}>close</button>
                        <button className='text-primary-orange text-sm font-bold py-2 px-6 bg-orange-100 rounded-lg capitalize hover:bg-orange-200'>save</button>
                        <button className='text-primary-white text-sm bg-primary-orange font-bold py-2 px-6 rounded-lg capitalize hover:opacity-60'>save & print</button>
                    </div>
                </section>
            </div>
          </div>  
        </div>
    );
}

export default MultiplePayment;