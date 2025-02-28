import { NavBlock } from '@/features/navigation/public'
import React from 'react'
import Link from 'next/link';

interface Props {}

export function Header(props: Props) {
    const {} = props

    return (
        <div>
            Header icon
            <NavBlock />
        </div>
    )
};
