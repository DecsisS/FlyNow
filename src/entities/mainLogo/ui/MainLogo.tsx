import { Flex, Typography } from 'antd';
import mainIcon from '../../../shared/lib/imgs/icons/mainIcon.svg';
import React from 'react'
import Image from 'next/image';
import Text from 'antd/es/typography/Text';
import Link from 'next/link';

export function MainLogo() {
    return (
        <Flex align='center'>
            <Link href='/home'>
                <Flex align="center" gap="small">
                    <Image src={mainIcon} width="50" height="50" alt="logo" />
                    <Typography>
                        <Text style={{
                            color: "#fff",
                            fontSize: "24px"
                        }}>
                            FlyNow
                        </Text>
                    </Typography>
                </Flex>
            </Link>
        </Flex>
    )
};
