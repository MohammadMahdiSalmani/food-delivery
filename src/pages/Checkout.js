import React, { useState } from 'react'
import { Button, Card, Divider, Radio } from 'antd'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [address, setAddress] = useState(1)
    const [delivery, setDelivery] = useState(1)

    const changeAddressHandler = e => {
        setAddress(e.target.value)
    }

    const changeDeliveryHandler = e => {
        setDelivery(e.target.value)
    }

    return (
        <section className='flex flex-col items-center w-full min-h-screen'>
            <h2 className='flex w-11/12 lg:w-2/3 justify-start text-5xl mb-4'>Delivery</h2>
            <Card className='flex flex-col w-11/12 lg:w-2/3 rounded-2xl' title="Address Details" bordered={false}>
                <label className='text-lg px-2'>MohammadMahdi Salmani</label>
                <span className='flex items-center px-2'>+1-212-456-7890</span>
                <Divider />
                <Radio.Group onChange={changeAddressHandler} value={address} className='flex flex-col'>
                    <Radio className='p-2' value={1}>7155 State Rt 12 S, Lowville NY 13367</Radio>
                    <Divider />
                    <Radio className='p-2' value={2}>4975 Transit Rd, Lancaster NY 14086</Radio>
                </Radio.Group>
            </Card>

            <Card className='flex flex-col w-11/12 lg:w-2/3 rounded-2xl mt-8' title="Delivery Method" bordered={false}>
                <Radio.Group onChange={changeDeliveryHandler} value={delivery} className='flex flex-col'>
                    <Radio className='px-2' value={1}>Door delivery</Radio>
                    <Divider />
                    <Radio className='px-2' value={2}>Pick up</Radio>
                </Radio.Group>
            </Card>

            {/* <div className='flex justify-between w-5/6 py-6'>
                <span className='flex text-2xl justify-center items-center'>Total Price:</span>
                <span className='flex text-2xl justify-center items-center'>{cart.totalPrice}$</span>
            </div> */}

            <Link to="/pay"><Button type='primary' className='fixed bottom-2 left-1/2 -translate-x-1/2 w-11/12 lg:w-1/2 h-auto text-xl py-2 rounded-xl bg-primary'>Proceed to Payment</Button></Link>
        </section>
    )
}

export default Checkout