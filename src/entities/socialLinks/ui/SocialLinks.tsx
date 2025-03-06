import { Button, Flex } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import facebookIcon from '@/shared/lib/imgs/icons/socialIcons/facebook.svg';
import linkedInIcon from '@/shared/lib/imgs/icons/socialIcons/linkedIn.svg';
import twitterIcon from '@/shared/lib/imgs/icons/socialIcons/twitter.svg';
import youtubeIcon from '@/shared/lib/imgs/icons/socialIcons/youtube.svg';

const items = [
    {
        name: 'Facebook',
        imgSrc: facebookIcon,
        href: 'https://www.facebook.com/',
    },
    {
        name: 'Twitter',
        imgSrc: twitterIcon,
        href: 'https://twitter.com/',
    },
    {
        name: 'Youtube',
        imgSrc: youtubeIcon,
        href: 'https://www.youtube.com/',
    },
    {
        name: 'LinkedIn',
        imgSrc: linkedInIcon,
        href: '/linkedIn',
    },
]

export function SocialLinks(props: PropsWithChildren) {
    const {} = props

    return (
        <Flex align='center'>
            <Flex gap={10} style={{ lineHeight: 0 }}>
                {items.map((item) => {
                    return (
                        <Button href={item.href} key={item.name} shape='circle' type='text' style={{
                            width: 50,
                            height: 50,
                            }}>
                            <Image src={item.imgSrc} alt={item.name} width={36} />
                        </Button>
                    )
                })}
            </Flex>
        </Flex>
    )
};
