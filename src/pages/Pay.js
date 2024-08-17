import React, { useState } from 'react'
import { Radio, Divider, Card, Avatar, Button } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Pay = () => {
    const [method, setMethod] = useState(1)

    const cart = useSelector(state => state.cart)

    const changeMethodHandler = e => {
        setMethod(e.target.value)
    }

    return (
        <section className='flex flex-col items-center w-full'>
            <h2 className='flex w-11/12 justify-start text-5xl mb-4'>Payment</h2>

            <Card className='flex flex-col w-11/12 rounded-2xl' title="Payment method" bordered={false}>
                <Radio.Group onChange={changeMethodHandler} value={method} className='flex flex-col'>
                    <Radio className='p-2' value={1}><Avatar shape="square" size="small" src="./img/credit-card.svg" /> Credit Card</Radio>
                    <Divider />
                    <Radio className='p-2' value={2}><Avatar shape="square" size="small" src="./img/paypal.svg" /> PayPal</Radio>
                </Radio.Group>
            </Card>

            <div className='flex justify-between w-5/6 py-6'>
                <span className='flex text-2xl justify-center items-center'>Total Price:</span>
                <span className='flex text-2xl justify-center items-center'>{cart.totalPrice}$</span>
            </div>

            <Link to="/"><Button type='primary' className='fixed bottom-2 left-1/2 -translate-x-1/2 w-11/12 h-auto text-xl py-2 rounded-xl bg-primary'>Pay</Button></Link>

        </section>
    )
}

export default Pay