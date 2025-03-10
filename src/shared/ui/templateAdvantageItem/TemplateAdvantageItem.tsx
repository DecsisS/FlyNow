import { Flex } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Image from 'next/image'
import React from 'react'
import { AdvantageItemType } from '../public';

interface Props {
    item: AdvantageItemType;
}

export function TemplateAdvantageItem(props: Props) {
    const { item } = props

    return (
        <Flex vertical>
            <Image src={item.src} alt="icon" />
            <Title level={4}>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
        </Flex>
    )
};
