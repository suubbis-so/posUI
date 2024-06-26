import React, { useState } from 'react';
import actionIcon from '../images/leftHero/Action.png'
import trash from '../images/leftHero/trash.png'
import plusIcon from '../images/leftHero/plus.png'
import minusIcon from '../images/leftHero/minus.png'
import tableData from './data/tableData';

function LeftSection() {
    return (
        <div className='mt-3 px-3' style={{height:'48vh',overflowY:'scroll'}}>
            <table className='p-2 table-auto relative bg-primary-greyishWhite relative' style={{width:'100%'}}>
                <thead className='p-4 rounded-lg' style={{borderRadius:'1rem'}}>
                    <tr className='uppercase bt-4b'>
                        <th className='self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10 ' style={{borderRadius:'.4rem 0 0 0'}}>sno</th>
                        <th className='self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>ritc no</th>
                        <th className='hidden md:table-cell self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>item name</th>
                        <th className='self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>stock</th>
                        <th className='self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>quantity</th>
                        <th className='hidden md:table-cell self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>unit price</th>
                        <th className='hidden md:table-cell self-center font-normal py-2 px-4 sticky top-0 bg-primary-greyishWhite z-10'>disc</th>
                        <th className='hidden md:table-cell self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>tax</th>
                        <th className='self-center font-normal py-2 px-2 md:px-4 sticky top-0 bg-primary-greyishWhite z-10'>amount</th>
                        <th className='hidden md:table-cell sticky top-0 bg-primary-greyishWhite z-10' style={{borderRadius:'0 .3rem 0 0'}}><img className=' py-2 px-2 mt-3' src={actionIcon} /></th>
                    </tr>
                </thead>
                <tbody  className='bg-primary-white'>
                {tableData.map((data)=>{
                    return(
                        <tr className=' border-t-2 border-primary-gray' key={data.id}>
                            <td className='py-2 px-2 md:px-4 font-bold'>{data.sno}</td>
                            <td className='py-2 px-2 md:px-4'>{data.ritcNo}</td>
                            <td className='hidden md:table-cell py-2 px-4'>{data.itemName}...</td>
                            <td className='py-2 px-4'>{data.stock}</td>
                            <div className='flex text-center px-4'>
                                <img className='self-center cursor-pointer hover:opacity-60' src={minusIcon}/>
                                <td className='self-top py-2 px-2'>{data.quantity}</td>
                                <img className='self-center cursor-pointer hover:opacity-60' src={plusIcon} />
                            </div>
                            <td className='hidden md:table-cell py-2 px-4 text-center'>{data.unitPrice}</td>
                            <td className='hidden md:table-cell py-2 px-4'>%{data.disc}</td>
                            <td className='hidden md:table-cell py-2 px-4'>%{data.tax}</td>
                            <td className='py-2 px-4  font-bold'>{data.amount}</td>
                            <img className='hidden md:table-cell py-2 px-2 mt-3' src={trash} />
                       </tr>
                    )
                })}
                    
                </tbody>

            </table>
        </div>
    );
}

export default LeftSection;