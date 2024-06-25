import React from 'react'; 
import searchIcon from '../images/rightHero/Search.png' 
import chevronRight from '../images/rightHero/chevron-right.png'
import infoIcon from '../images/rightHero/Info spot(1).png'
import placeHolderImage from '../images/rightHero/Placeholder.png' 
import productData from './data/productData';

function RightSection() {
    return (
        <div className='col-span-1 px-7 mt-4 mr-5' >
            <h4 className='capitalize text-primary-blackish font-bold text-lg'>product information</h4>
            <form className='my-4'>
            <div className='flex py-2 px-4 align-middle gap-2 rounded-lg ' style={{border:'solid 1px gray'}}>
                <img src={searchIcon}/>
                <input className='capitalize outline-none' style={{background:'none'}} placeholder='search products'/>
            </div>
            <select value='select brand' className='text-primary-blackish my-3 py-2 px-4 rounded-lg capitalize' style={{background:'none',border:'solid 1px gray',width:'100%'}}>
                <option className='capitalize text-primary-black' style={{background:'none'}}>select brand</option>
            </select>
            <select value='select brand' className='text-primary-blackish my-3 py-2 px-4 rounded-lg capitalize' style={{background:'none',border:'solid 1px gray',width:'100%'}}>
                <option className='capitalize text-primary-black' style={{background:'none'}}>select category</option>
                {/* <img className='cursor-pointer' src={chevronRight}/> */}
                {/*             <select value='select brand' className='flex justify-between bg-primary-white my-3 py-2 px-4 align-middle gap-2 rounded-lg ' style={{background:'none',border:'solid 1px gray',width:'100%'}}> */}
            </select>
            
            </form>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 pb-5' style={{height:'56vh', overflowY:'scroll'}}>
                { productData.map((data)=>{
                        return(
                            <div key={data.id} className='bg-primary-white rounded-md p-3'>
                                <div>
                                    <img className='rounded' src={placeHolderImage} style={{width:'100%'}}/>
                                </div>
                                <div className='my-2'>
                                    <h3 className='capitalize'>{data.name}</h3>
                                    <p className='text-primary-orange font-bold text-lg'>${data.price}</p>
                                    <div className='flex justify-between'>
                                        <span ><span className='font-bold'>stock:</span> {data.stock}</span>
                                        <img className='self-center' src={infoIcon} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default RightSection;