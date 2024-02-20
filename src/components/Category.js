import React from 'react'
import { food } from '../food'
import { Card } from 'antd'

const Category = ({ category }) => {
    return (
        <div className='flex flex-col justify-center mt-16'>
            <label className='text-5xl ml-10'>{category}</label>
            <ul className='flex overflow-x-scroll no-scrollbar'>
                {food[category].map(item => {
                    return <li key={item.name} className='basis-2/3 w-32 shrink-0 mx-2 overflow-hidden'>
                        <Card
                            hoverable
                            cover={<img alt={item.name} src={item.img} className='relative -top-10 px-5' />}
                            className='flex flex-col items-center mt-14 rounded-3xl'
                        >
                            <label className='flex justify-center text-2xl w-full'>{item.name}</label>
                            <label className='flex justify-center text-2xl w-full'>{item.price}</label>
                        </Card>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Category