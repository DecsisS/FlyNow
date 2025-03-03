import { ContactInfo } from '@/entities/contactInfo/public';
import { MainLogo } from '@/entities/mainLogo/public';
import { QuickLinks } from '@/entities/quickLinks/public';
import { SocialLinks } from '@/entities/socialLinks/public';
import { Flex, Typography } from 'antd';
import React, { PropsWithChildren } from 'react';

const { Text } = Typography;

export function FooterBlock(props: PropsWithChildren) {
    return (
        <Flex vertical gap={40} style={{ paddingTop: '30px' }}>
            <Flex justify='space-between' style={{
            }}>
                <MainLogo />
                <SocialLinks />
                <QuickLinks />
                <ContactInfo />
            </Flex>
            <Flex justify='space-between' style={{
            }}>
                <Text type='secondary'>© 2025 FlyNow</Text>
                <Text type='secondary'>All Rights Reserved</Text>
            </Flex>
        </Flex>
    )
};
