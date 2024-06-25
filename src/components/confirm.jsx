import React from 'react';
import tableData from './data/tableData';
import discount from '../images/Discount.png'
import shopifyIcon from '../images/Shopify Payments.png'
import cash from '../images/leftHero/Cash.png'
import leftArrow from '../images/manageCustomer/arrow-left.png'
import arrowLeft from '../images/Arrow left.png'


function Cornfirm(props) {
    return (
        <div className='bg-primary-manage  w-full h-5/6 absolute top-40 left-0 z-20 backdrop-blur-sm ' style={{display:props.confirm?'block':'none'}}>   
            <div className='py-6  bg-primary-white rounded-lg w-96' style={{width:'60%',margin:'0% 15%'}}>
                <h4 className='text-center font-bold capitalize py-1'>confirm order</h4>
                <p className='text-center text-primary-blackish text-sm '>Please confirm the order below to completed payment</p>
                <div className='my-6 mx-20' style={{height:'45vh',overflowY:'scroll'}}  >
                    <table className='table-auto border relative bg-primary-greyishWhite relative ' >
                        <thead className='rounded-lg' style={{borderRadius:'1rem'}}>
                            <tr className='uppercase bt-4b'>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm ' style={{borderRadius:'.4rem 0 0 0'}}>sno</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>ritc no</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>item name</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>stock</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>quantity</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>unit price</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>disc</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>tax</th>
                                <th className='self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10 text-sm'>amount</th>
                            </tr>
                        </thead>
                        <tbody  className='bg-primary-white'>
                            {tableData.map((data)=>{
                                return(
                                    <tr className=' border-t-2 border-primary-gray' key={data.id}>
                                        <td className='text-sm py-2 px-4 font-bold'>{data.sno}</td>
                                        <td className='text-sm py-2 px-4'>{data.ritcNo}</td>
                                        <td className='text-sm py-2 px-4'>{data.itemName}...</td>
                                        <td className='text-sm py-2 px-4'>{data.stock}</td>
                                        <div className='flex text-center px-4'>
                                            <td className='text-sm self-top py-2 px-2'>{data.quantity}</td>
                                        </div>
                                        <td className='text-sm py-2 px-4'>%{data.disc}</td>
                                        <td className='text-sm py-2 px-4'>%{data.tax}</td>
                                        <td className='text-sm py-2 px-4  font-bold'>{data.amount}</td>
                                        <td className='text-sm py-2 px-4 text-center'>{data.unitPrice}</td>
                                </tr>
                                )
                            })}
                                
                            </tbody>             
                </table>
            </div>
            <div className='grid grid-cols-5 gap-2 mx-28'>
                    <div className='p-2 bg-primary-gray border border-primary-gray shadow-black-500/40  rounded-lg hover:border-primary-orange ' onClick={props.toggleConfirm}>
                        <div className='flex flex-col gap-3  align-middle'>
                            <img className=' bg-gray-200 cursor-pointer w-10' src={leftArrow} />
                            <p className=' uppercase text-primary-blackish'>back</p>
                        </div>
                    </div>
                    <div className='p-2 bg-primary-white border border-primary-gray shadow-black-500/40  rounded-lg hover:border-primary-orange'>
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={discount} />
                            <p className='uppercase text-primary-blackish'>discount</p>
                        </div>
                        <p className='mt-3'>-% 8.88</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    <div className='p-2 px-6 border border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg hover:border-primary-orange' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={shopifyIcon} />
                            <p className='uppercase text-primary-blackish'>tax</p>
                        </div>
                        <p className='mt-3'>-% 10.332</p>
                        <span className='text-primary-blackish'>$99.000</span>
                    </div>
                    
                    <div className='p-2 border border-primary-gray bg-primary-white shadow-black-500/40  rounded-lg hover:border-primary-orange ' >
                        <div className='flex gap-3'>
                            <img className='self-center text-primary-blackish' src={cash} />
                            <p className='uppercase text-primary-blackish '>suptotal</p>
                        </div>
                        {/* <p className='mt-3'>-% 8.88</p> */}
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6 hover:font-bold hover:text-primary-black' style={{fontSize:'1.6em'}}>$ 99.332</p>
                    </div>
                    <div className='p-2 border border-primary-gray bg-primary-white shadow-black-500/40 hover:border-primary-orange  rounded-lg' >
                        <div className='flex gap-3'>
                            <img className='self-center ' src={cash} />
                            <p className='uppercase text-primary-blackish'>total</p>
                        </div>
                        <p className='text-primary-blackish text-primary-black  font-bold mt-6 hover:font-bold hover:text-primary-black' style={{fontSize:'1.6em'}}>$ 100.332</p>
                    </div>
               
                </div>
                <div className='mx-20 my-2'>
                    <button className='py-6 w-full bg-primary-orange flex justify-center gap-6 rounded-md cursor-pointer hover:opacity-80' onClick={props.toggleMultiplePayments}>
                        <img className='self-center' src={arrowLeft} alt='left arrow'/>
                        <span className='self-center uppercase text-primary-white font-bold text-lg' style={{fontSize:'2rem'}}>confirm</span> 
                    </button>
                </div>
                
                
            </div>
           
        </div>
    );
}

export default Cornfirm;