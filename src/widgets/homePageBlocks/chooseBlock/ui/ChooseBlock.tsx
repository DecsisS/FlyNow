import { Advantages } from '@/entities/advantages/public'
import { Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import React from 'react'
import cashIcon from '@/shared/lib/imgs/icons/advantagesIcons/cash.svg';
import accessIcon from '@/shared/lib/imgs/icons/advantagesIcons/access.svg';
import stonksIcon from '@/shared/lib/imgs/icons/advantagesIcons/stonks.svg';

const advantages = [
    {
        src: cashIcon,
        title: 'Machine learning',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },
    {
        src: stonksIcon,
        title: 'Embed analytics',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },
    {
        src: accessIcon,
        title: 'Access control',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },
]

interface Props {}

export function ChooseBlock(props: Props) {
    const {} = props

    return (
        <Flex vertical>
            <Title level={1}>
                Why our clients chosse FlyNow?
            </Title>
            <Paragraph>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Paragraph>
            <Advantages items={advantages}/>
        </Flex>
    )
};
