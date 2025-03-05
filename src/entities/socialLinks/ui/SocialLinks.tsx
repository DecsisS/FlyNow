import { Flex } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import facebookIcon from '@/shared/lib/icons/socialIcons/facebook.svg';
import linkedInIcon from '@/shared/lib/icons/socialIcons/linkedIn.svg';
import twitterIcon from '@/shared/lib/icons/socialIcons/twitter.svg';
import youtubeIcon from '@/shared/lib/icons/socialIcons/youtube.svg';

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
                        <Link href={item.href} key={item.name}>
                            <Image src={item.imgSrc} alt={item.name} width={36} />
                        </Link>
                    )
                })}
            </Flex>
        </Flex>
    )
};
