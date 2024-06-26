import React from 'react';

function HoldList(props) {

    return (
  <div className='tbg-primary-manage  w-full h-5/6  absolute top-40 right-0 z-20 backdrop-blur-sm' style={{display:props.holdListOpen? 'block':'none'}} onClick={props.toggleHoldList}>
            <div className='py-6 px-4 mx-2 lg:mx-0 bg-primary-white rounded-lg lg:w-3/5 lg:ml-96 my-4' >
            {/* style={{width:'60%',margin:'2% 30%'}} */}
                <table className='border'>
                    <thead className='bg-primary-greyishWhite' style={{borderRadius:'1rem'}}>
                        <tr>
                            <th className='py-2  lg:px-10 capitalize font-normal round-t-lg'>customer name</th>
                            <th className='py-2  lg:px-10  capitalize font-normal'>phone number</th>
                            <th className='py-2  lg:px-10 capitalize font-normal'>email address</th>
                            <th className='hidden md:table-cell py-2 px-2 md:px-10 capitalize font-normal'>ref code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='border-t-2 border-primary-gray'>
                            <td className='py-4 px-2 lg:px-10 capitalize font-normal'>john sparrow</td>
                            <td className='py-4 px-2 lg:px-10 capitalize font-normal'>083894771983</td>
                            <td className='py-4 px-2 lg:px-10 capitalize '>john.sparrow@mail.com</td>
                            <td className='hidden md:table-cell py-4 px-2 md:px-10 font-bold text-gray-400' > - </td>
                            <td></td>
                        </tr>
                        <tr className='border-t-2 border-primary-gray'>
                            <td className='py-4 lg:px-10 capitalize font-normal'>bella anisa</td>
                            <td className='py-4 lg:px-10 capitalize font-normal'>081829748835</td>
                            <td className='py-4 lg:px-10 capitalize font-normal'>bella.anisa27@mail.com</td>
                            <td className='hidden md:table-cell py-4 px-10 font-bold text-gray-400'> - </td>
                            <td colSpan={2}  className='hidden lg:table-cell px-2'>
                                <div className='flex gap-4 py-2 px-1'>
                                    <button className='text-sm self-center capitalize  py-1 px-4 self-center text-primary-orange font-bold px-3 border-2 border-primary-orange rounded-lg hover:opacity-60'>display order</button>
                                    <button className='text-xs px-4 self-center font-bold rounded px-2 py-2 capitalize bg-primary-orange text-primary-white hover:opacity-60'>add to order</button> 
                                </div>
                            </td>
                        </tr>
                        <tr className='border-t-2 border-b-2'>
                            <td className='py-2 px-4 lg:px-10 capitalize font-normal'>Minimo masasi</td>
                            <td className='py-2 px-4 lg:px-10 capitalize font-normal'>087837829837</td>
                            <td className='py-2 px-4 lg:px-10 capitalize font-normal'>minimo45@mail.com</td>
                            <td className='hidden md:table-cell py-2 px-4 lg:px-10 font-bold text-gray-400'> - </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default HoldList;