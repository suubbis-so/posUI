import React from 'react';
import frame from '../images/Frame.png'
import vector from '../images/Vector.png'
import wifiIcon from '../images/wifi.png'
import lockIcon from '../images/Lock.png'
import conten from '../images/Content.png'

function Header() {
    return (
        <div className='flex bg-primary-white py-3 px-6 align-middle justify-between border-b-2'>
            <div className='logoSec '>
                <img src={frame} />
            </div>
            <div className='flex gap-5 align-middle'>
                <div className='flex gap-7 '>
                    <img className='self-center' src={vector}/>
                    <p className='self-center font-bold capitalize'>october 18th 2002,10:00Am</p>
                </div>
                <div className='flex gap-9 align-middle '>
                    <img className='self-center' src={wifiIcon} />
                    <img className='self-center' src={lockIcon} />
                    <span className='bg-primary-black text-primary-white self-center py-2 px-4 capitalize rounded-full'>a</span>
                    <img className='self-center' src={conten} />
                </div>
            </div>
        </div>
    );
}

export default Header;