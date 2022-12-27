import React from 'react'
import { useState } from 'react'
import { data } from '../../data/dummyData'

const Food = () => {

    const [foods, setFoods] = useState(data)

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        )
    }


  return (
    <>
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap m-1'>
                        <button 
                        onClick={() => setFoods(data)}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button 
                        onClick={() => filterType('burger')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button 
                        onClick={() => filterType('pizza')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button 
                        onClick={() => filterType('salad')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button 
                        onClick={() => filterType('chicken')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button 
                        onClick={() => filterPrice('$')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button 
                        onClick={() => filterPrice('$$')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button 
                        onClick={() => filterPrice('$$$')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button 
                        onClick={() => filterPrice('$$$$')}
                        className='px-2 rounded-xl border border-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {
                    foods.map((item, index) => (
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <img src={item.image} alt="dummyData"
                                className='w-full h-[200px] object-cover rounded-t-lg'
                            />
                            <div className='flex justify-between px-2 py-4'>
                                <p className=''>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-lg'>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Food