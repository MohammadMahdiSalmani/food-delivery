import React from 'react'
import Category from '../components/Category'
import FoodDrawer from '../components/FoodDrawer'
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'

const Home = () => {
  return (
    <section className='flex flex-col w-full'>
      <div className='flex flex-col items-center w-full px-10 lg:mt-10'>
        <Input className='flex w-full lg:w-1/2 pl-5 text-2xl rounded-full bg-lightGray border-none' size='large' prefix={<SearchOutlined />} placeholder='Search' />
      </div>

      <Category category="Pizza" />
      <Category category="Burger" />
      <Category category="Salad" />

      <FoodDrawer />

    </section>
  )
}

export default Home