import React from 'react';
import actionIcon from '../images/leftHero/Action.png'
import trash from '../images/leftHero/trash.png'
import plusIcon from '../images/leftHero/plus.png'
import minusIcon from '../images/leftHero/minus.png'

function LeftSection() {
    return (
        <div className='p-5'>
            <table className='table-auto'>
                <thead className='p-4' style={{backgroundColor:'#D2D6DC'}}>
                    <tr className='uppercase '>
                        <th className='self-center font-normal'>sno</th>
                        <th className='self-center font-normal'>ritc no</th>
                        <th className='self-center font-normal'>item name</th>
                        <th className='self-center font-normal'>stock</th>
                        <th className='self-center font-normal'>quantity</th>
                        <th className='self-center font-normal'>unit price</th>
                        <th className='self-center font-normal'>disc</th>
                        <th className='self-center font-normal'>tax</th>
                        <th className='self-center font-normal'>amount</th>
                        <img className='self-center' src={actionIcon} />
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-primary-white'>
                        <td>1</td>
                        <td>54075290</td>
                        <td>CLARKSON REC, POLYESTER ...</td>
                        <td>10.000</td>
                        <div className='flex gap-1 align-middle'>
                            <img className='self-center' src={minusIcon} />
                            <td className='self-center'>333</td>
                            <img className='self-center' src={plusIcon} />
                        </div>
                        <td>100,000000</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100.0000</td>
                        <img src={trash} />
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default LeftSection;