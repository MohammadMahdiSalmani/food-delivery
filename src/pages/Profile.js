import React, { useState } from 'react'
import { Button, Card, Divider, Input, Modal, message } from 'antd'

const Profile = () => {
    const [newAddress, setNewAddress] = useState()
    const [modal, setModal] = useState(false)

    const addNewAddressHandler = () => {
        if (newAddress) {
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
                    <Input type='text' value={newAddress} onChange={event => setNewAddress(event.target.value)} />
                </Modal>

                <div className='flex flex-col justify-center text-lightBlack'>
                    <span className='px-2'>• 4975 Transit Rd, Lancaster NY 14086</span>
                    <Divider />
                    <span className='px-2'>• 7155 State Rt 12 S, Lowville NY 13367</span>
                </div>
            </Card>
        </section>
    )
}

export default Profile