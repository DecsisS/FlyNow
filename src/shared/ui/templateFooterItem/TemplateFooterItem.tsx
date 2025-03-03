import { Flex, Typography } from 'antd';
import Image from 'next/image';
import React from 'react'

type Item = {
    text: string
    icon?: any;
};

interface Props {
    name: string;
    items: Item[];
}

const { Text } = Typography;

export function TemplateFooterItem(props: Props) {
    return (
        <Flex vertical gap={5} align='start'>
            <Text style={{ fontWeight: 600 }}>{props.name}</Text>
            {props.items.map((item) => {
                return (
                    item.icon
                        ? <Flex key={item.text} gap={10} align='center'>
                            <Image src={item.icon} alt={'icon'}/>
                            <Text type="success">{item.text}</Text>
                        </Flex>
                        : <Text key={item.text} type="success">{item.text}</Text>
                )
            })}
        </Flex>
    )
};
