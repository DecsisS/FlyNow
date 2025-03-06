import { Flex } from 'antd'
import Image from 'next/image'
import React from 'react'
import WildWood from '@/shared/lib/imgs/icons/partnersIcons/logo1.svg';
import AppleRush from '@/shared/lib/imgs/icons/partnersIcons/logo2.svg';
import AVGroup from '@/shared/lib/imgs/icons/partnersIcons/logo3.svg';
import FairTech from '@/shared/lib/imgs/icons/partnersIcons/logo4.svg';
import Hard2Ignore from '@/shared/lib/imgs/icons/partnersIcons/logo5.svg';

const partners = [
    {
        name: 'WildWood',
        imgSrc: WildWood,
    },
    {
        name: 'AppleRush',
        imgSrc: AppleRush,
    },
    {
        name: 'AVGroup',
        imgSrc: AVGroup,
    },
    {
        name: 'FairTech',
        imgSrc: FairTech,
    },
    {
        name: 'Hard2Ignore',
        imgSrc: Hard2Ignore,
    }
]

const borderBlock = '1px solid #ebebeb';

interface Props {}

export function PartnersBlock(props: Props) {
    const {} = props

    return (
        <Flex justify='space-between' style={{
            borderBottom: borderBlock,
            borderTop: borderBlock,
        }}>
            {partners.map((item) => {
                return (
                    <Image key={item.name} src={item.imgSrc} alt={item.name} />
                )
            })}
        </Flex>
    )
};
