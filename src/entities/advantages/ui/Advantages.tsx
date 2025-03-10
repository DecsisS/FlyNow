import { AdvantageItemType, TemplateAdvantageItem } from '@/shared/ui/public'
import { Flex } from 'antd'
import React from 'react'

interface Props {
    items: AdvantageItemType[];
}

export function Advantages(props: Props) {
    const { items } = props

    return (
        <Flex>
            {items.map((item) => {
                return (
                    <TemplateAdvantageItem key={item.title} item={item}/>
                )
            })}
        </Flex>
    )
};
