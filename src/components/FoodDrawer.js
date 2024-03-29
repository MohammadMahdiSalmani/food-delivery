import React from 'react'
import { Drawer, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer} from '../redux/reducers/drawerSlice'
import { increment, decrement } from '../redux/reducers/cartSlice'

const FoodDrawer = () => {
  const dispatch = useDispatch()
  const food = useSelector(state => state.drawerStatus)
  const cart = useSelector(state => state.cart)

  const count = cart.items.find(item => item.name === food.name)

  return (
    <Drawer open={food.status} onClose={() => dispatch(toggleDrawer({ status: false, name: "", price: "", count: 0, img: "" }))} placement='bottom' closable={false} className='flex flex-col rounded-t-3xl'>
      <div className="flex justify-center">
        <div className="w-2/3">
          <img alt='Food' src={food.img} />
        </div>
      </div>

      <label className='flex justify-center text-3xl my-8'>{food.name}</label>
      <label className='flex justify-center text-2xl text-primary'><strong className='text-dark'>{food.price}</strong>&nbsp;$</label>
      <div className='flex justify-center mt-10'>
          <Button onClick={() => dispatch(decrement({ name: food.name }))} type="primary" className="border-2 border-solid bg-primary">-</Button>
          <span className='text-2xl mx-5'>{count ? count.count : 0}</span>
          <Button onClick={() => dispatch(increment({ name: food.name, price: food.price, img: food.img }))} type="primary" className="border-2 border-solid bg-primary">+</Button>
      </div>
    </Drawer>

  )
}

export default FoodDrawer