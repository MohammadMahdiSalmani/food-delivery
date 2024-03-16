import React, { useState } from 'react'
import { Button, Card, Input, Modal, Radio, message } from 'antd'

const Profile = () => {
    const [address, setAddress] = useState(1)
    const [newAddress, setNewAddress] = useState()
    const [modal, setModal] = useState(false)

    const changeAddressHandler = e => {
        setAddress(e.target.value)
    }

    const addNewAddressHandler = () => {
        if(newAddress) {
            console.log("New Address Added")
            setNewAddress()
            message.success("New address added!")
        }
    }

    return (
        <section className='flex flex-col items-center justify-start w-full'>
            <Card className='flex flex-col w-11/12 rounded-2xl' bordered={false} title="Information">
                <div className='flex items-center justify-between'>
                    <img alt='Profile' src='./img/user-solid.svg' className='w-1/5 p-2 bg-lightGray rounded-xl' />

                    <div className='flex flex-col items-start'>
                        <label className='flex text-lg'>MohammadMahdi Salmani</label>
                        <label className='flex text-md text-gray'>msas.mohammad1382@yahoo.com</label>
                    </div>
                </div>
            </Card>

            <Card className='flex flex-col w-11/12 rounded-2xl mt-8' title="Addresses" bordered={false} extra={<Button type='primary' className='text-white bg-lightBlack rounded-lg' onClick={() => setModal(true)}>+</Button>}>
                <Modal title="New Address" open={modal} onCancel={() => setModal(false)} footer={[<Button key="submit" type="primary" className='text-white bg-info' onClick={addNewAddressHandler}>Add</Button>]}>
                    <Input type='text' value={newAddress} onChange={event => setNewAddress(event.target.value) } />
                </Modal>
                <div className='flex flex-col items-start'>
                    <Radio.Group onChange={changeAddressHandler} value={address}>
                        <Radio className='p-2 pt-0' value={1}>7155 State Rt 12 S, Lowville NY 13367</Radio>
                        <Radio className='p-2 pt-0' value={2}>4975 Transit Rd, Lancaster NY 14086</Radio>
                    </Radio.Group>
                </div>
            </Card>
        </section>
    )
}

export default Profile