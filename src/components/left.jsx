import React, { useState } from 'react';
import actionIcon from '../images/leftHero/Action.png'
import trash from '../images/leftHero/trash.png'
import plusIcon from '../images/leftHero/plus.png'
import minusIcon from '../images/leftHero/minus.png'
import tableData from './data/tableData';

function LeftSection() {
    // const[quantity,setQuantity] = useState(tableData.map((quantity)=> quantity))

    return (
        <div className='py-3 px-3' style={{height:'50vh',overflowY:'scroll'}}>
            <table className='table-auto  rounded-lg bg-primary-gray' style={{width:'100%'}}>
                <thead className='p-4 '>
                {/* bg-primary-bg-th */}
                    <tr className='uppercase bt-4 rounded-lg'>
                        <th className='self-center font-normal py-2 px-4'>sno</th>
                        <th className='self-center font-normal py-2 px-4'>ritc no</th>
                        <th className='self-center font-normal py-2 px-4'>item name</th>
                        <th className='self-center font-normal py-2 px-4'>stock</th>
                        <th className='self-center font-normal py-2 px-4'>quantity</th>
                        <th className='self-center font-normal py-2 px-4'>unit price</th>
                        <th className='self-center font-normal py-2 px-4'>disc</th>
                        <th className='self-center font-normal py-2 px-4'>tax</th>
                        <th className='self-center font-normal py-2 px-4'>amount</th>
                        <img className='self-center py-2 px-2 mt-3' src={actionIcon} />
                    </tr>
                </thead>
                <tbody  >
                {tableData.map((data)=>{
                    return(
                        <tr className='bg-primary-white border-t-2 border-primary-gray' key={data.id}>
                            <td className='py-2 px-4 font-bold'>{data.sno}</td>
                            <td className='py-2 px-4'>{data.ritcNo}</td>
                            <td className='py-2 px-4'>{data.itemName}...</td>
                            <td className='py-2 px-4'>{data.stock}</td>
                            <div className='flex text-center px-4'>
                                <img className='self-center cursor-pointer hover:opacity-60' src={minusIcon}/>
                                <td className='self-top py-2 px-2'>{data.quantity}</td>
                                <img className='self-center cursor-pointer hover:opacity-60' src={plusIcon} />
                            </div>
                            <td className='py-2 px-4 text-center'>{data.unitPrice}</td>
                            <td className='py-2 px-4'>%{data.disc}</td>
                            <td className='py-2 px-4'>%{data.tax}</td>
                            <td className='py-2 px-4  font-bold'>{data.amount}</td>
                            <img className='py-2 px-2 mt-3' src={trash} />
                       </tr>
                    )
                })}
                    
                </tbody>

            </table>
        </div>
    );
}

export default LeftSection;