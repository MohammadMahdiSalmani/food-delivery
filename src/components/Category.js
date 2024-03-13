import React from 'react'
import { food } from '../food'
import { Card } from 'antd'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from '../redux/reducers/drawerSlice'

const Category = ({ category }) => {
    const dispatch = useDispatch()

    return (
        <div className='flex flex-col justify-center mt-16'>
            <label className='text-5xl ml-10'>{category}</label>
            <ul className='flex overflow-x-scroll no-scrollbar'>
                {food[category].map(item => {
                    return <li key={item.name} className='basis-2/3 w-32 shrink-0 mx-2 overflow-hidden'>
                        <Card
                            cover={<img alt={item.name} src={item.img} className='w-full h-56 object-contain relative -top-10 px-5' />}
                            className='flex flex-col items-center mt-14 rounded-3xl'
                            onClick={() => dispatch(toggleDrawer({ status: true, name: item.name, price: item.price, img: item.img }))}
                        >
                            <div className='flex flex-col'>
                                <label className='flex justify-center text-xl w-full'>{item.name}</label>
                                <label className='flex justify-center text-2xl p-5 w-full text-primary'><strong className="text-dark">{item.price}</strong>$</label>
                            </div>
                        </Card>
                    </li>
                })}
            </ul>

        </div>
    )
}

export default Category