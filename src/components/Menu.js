import React, { useState } from 'react'
import { Badge, Button, Card, Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/cartSlice'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import useWindowDimensions from '../hooks/useWindowDimensions'


const Menu = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    
    const { width } = useWindowDimensions()


    const listItem = cart.items.map(item => {
        return (
            <li key={item.name} className='flex w-full text-2xl my-2 text-dark'>
                <Card className='flex w-full rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img alt='Food' src={item.img} className='w-1/3' />

                            <div className='flex flex-col ml-2'>
                                <label className='flex w-full justify-start text-xl'>{item.name}</label>
                                <label className='flex w-full justify-start text-lg text-primary'>{item.price}$</label>
                            </div>
                        </div>

                        <div className='flex flex-col items-center bg-primary rounded-full'>
                            <Button onClick={() => dispatch(increment({ name: item.name, price: item.price, img: item.img }))} type="text" className="text-white rounded-full">+</Button>
                            <span className='flex items-center text-xl text-white pt-1'>{item.count}</span>
                            <Button onClick={() => dispatch(decrement({ name: item.name }))} type="text" className="text-white rounded-full">-</Button>
                        </div>
                    </div>
                </Card>
            </li>
        )
    })

    return (
        <nav className='flex justify-end px-10 py-5 w-full fixed z-50 bg-background'>
            {width > 421 ? <Navbar /> : null}

            <span className='flex justify-end w-1/5 z-50' onClick={() => setOpen(!open)}>
                <Badge count={cart.items.length} overflowCount={10} className='w-1/2 lg:w-1/6'>
                    <img src='./img/cart.svg' alt='Cart' className="cursor-pointer" />
                </Badge>
            </span>

            <Drawer closeIcon={width < 421 ? <img alt='Back' src='./img/angle-left.svg' className='w-1/12' /> : null} open={open} placement='right' size="large" className='bg-background relative' onClose={() => setOpen(false)}>
                <ul className='flex flex-col w-full justify-center items-center pb-14'>
                    {listItem}
                </ul>

                <Link to="/checkout"><Button type='primary' onClick={() => setOpen(false)} className='absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12 h-auto text-xl py-2 rounded-xl bg-primary disabled:bg-lightGray' disabled={cart.items.length > 0 ? false : true}>Checkout</Button></Link>
            </Drawer>
        </nav>
    )
}

export default Menu