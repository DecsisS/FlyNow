import { Flex, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ItemType } from './types';
import FooterLink from './FooterLink';

interface Props {
    name: string;
    items: ItemType[];
}

const { Text } = Typography;

export function TemplateFooterItem(props: Props) {
    return (
        <Flex vertical gap={5} align='start'>
            <Text type='secondary' style={{ fontWeight: 600 }}>{props.name}</Text>
            {props.items.map((item) => {
                return (
                    item.icon
                        ? <Flex key={item.text} gap={10} align='center'>
                            <Image src={item.icon} alt={'icon'} />
                            <FooterLink item={item}/>
                        </Flex>
                        : <FooterLink key={item.text} item={item}/>
                )
            })}

        </Flex>
    )
};
