import React from 'react'
import Category from '../components/Category'
import FoodDrawer from '../components/FoodDrawer'
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'

const Home = () => {
  return (
    <section className='flex flex-col w-full'>
      <div className='flex flex-col items-center w-full px-10'>
        <label className='flex w-full justify-center py-10 text-3xl'>Delicious food for you</label>
        <Input className='flex w-full pl-5 text-2xl rounded-full bg-lightGray border-none' size='large' prefix={<SearchOutlined />} placeholder='Search' />
      </div>

      <Category category="Pizza" />
      <Category category="Burger" />
      <Category category="Salad" />

      <FoodDrawer />

    </section>
  )
}

export default Home