import { TemplateFooterItem } from '@/shared/ui/public'
import { PropsWithChildren } from 'react'

const items = [
    {
        text: 'Home',
    },
    {
        text: 'Flights',
    },
    {
        text: 'Your order',
    },
    {
        text: 'Contacts',
    },
    {
        text: 'About Us',
    },
]

export function QuickLinks(props: PropsWithChildren) {
    return (
        <TemplateFooterItem name="Quick Links" items={items}/>
    )
};
