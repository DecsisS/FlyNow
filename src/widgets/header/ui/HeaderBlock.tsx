import { MainLogo } from '@/entities/mainLogo/public'
import { NavBlock } from '@/features/navigation/public'
import { Flex } from 'antd'
import React from 'react'

interface Props {}

export function HeaderBlock(props: Props) {
    const {} = props

    return (
        <Flex justify="space-between">
            <MainLogo />
            <NavBlock />
        </Flex>
    )
};
