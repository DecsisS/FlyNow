import { Flex } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import facebookIcon from '@/shared/lib/icons/socialIcons/facebook.svg';
import linkedInIcon from '@/shared/lib/icons/socialIcons/linkedIn.svg';
import twitterIcon from '@/shared/lib/icons/socialIcons/twitter.svg';
import youtubeIcon from '@/shared/lib/icons/socialIcons/youtube.svg'

export function SocialLinks(props: PropsWithChildren) {
    const {} = props

    return (
        <Flex align='center'>
            <Flex gap={10}>
                <Link href='#'><Image src={facebookIcon} alt="Facebook" width={36}/></Link>
                <Link href='#'><Image src={linkedInIcon} alt="LinkedIn" width={36}/></Link>
                <Link href='#'><Image src={twitterIcon} alt="Twitter" width={36}/></Link>
                <Link href='#'><Image src={youtubeIcon} alt="YouTube" width={36}/></Link>
            </Flex>
        </Flex>
    )
};
