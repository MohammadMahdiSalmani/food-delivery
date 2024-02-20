import React from 'react'
import Menu from '../components/Menu'
import { Card, Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { food } from '../food'

const Home = () => {
  return (
    <section className='flex flex-col w-full'>
      <Menu />

      <div className='flex flex-col items-center w-full px-10'>
        <label className='flex w-full justify-center py-10 text-5xl'>Delicious food for you</label>
        <Input className='flex w-5/6 pl-5 text-2xl rounded-full bg-lightGray border-none' size='large' prefix={<SearchOutlined />} placeholder='Search' />
      </div>


      <div className='flex flex-col justify-center mt-16'>
        <label className='text-5xl ml-10'>Pizza</label>
        <ul className='flex overflow-x-scroll no-scrollbar'>
          {food.pizza.map(item => {
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

      <div className='h-80'>

      </div>
    </section>
  )
}

export default Home