import { Button, Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import Image from 'next/image'
import React from 'react'
import Plane15 from '@/shared/lib/imgs/backgrounds/Plane15.png';
import Link from 'next/link'

interface Props {}

export function StartBlock(props: Props) {
    const {} = props

    return (
        <Flex>
            <Flex vertical justify='center' gap={30} align='center'>
                <Title style={{ textShadow: '1px 2px 2px rgba(0,0,0,0.6)'}}>
                    Find true power in your journey with FlyNow
                </Title>
                <Paragraph>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Paragraph>
                <Link href="/flights">
                    <Button type="primary" size="large">
                        Start now!
                    </Button>
                </Link>
            </Flex>
            <Image src={Plane15} alt="Home Image №1" style={{ 
                width: "60%",
                height: "100%",
                boxShadow: '15px 0px 25px 8px rgba(250, 250, 250, 0.13) inset',
                }}/>
        </Flex>
    )
};
