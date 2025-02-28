'use client'

import React, { FC, useState } from 'react'
import Link from 'next/link'
import { Menu, MenuProps } from 'antd';

const items = [
    {
        label: <Link href="/home">Home</Link>,
        key: 'home',
    }, 
    {
        label: <Link href="/flights">Flights</Link>,
        key: 'flights',
    },
    {
        label: <Link href="/about">About us</Link>,
        key: 'about',
    },
    {
        label: <Link href="/contacts">Contacts</Link>,
        key: 'contacts',
    },
    {
        label: <Link href="/order">Your order</Link>,
        key: 'order',
    }
    
];

export const NavBlock: FC = () => {
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
        setCurrent(e.key);
    };
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
    )
};
