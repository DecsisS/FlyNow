import { TemplateFooterItem } from '@/shared/ui/public'
import { PropsWithChildren } from 'react'

const items = [
    {
        text: 'Home',
        link: '/home'
    },
    {
        text: 'Flights',
        link: '/flights',
    },
    {
        text: 'Your order',
        link: '/order'
    },
    {
        text: 'Contacts',
        link: '/contacts'
    },
    {
        text: 'About Us',
        link: '/about'
    },
]

export function QuickLinks(props: PropsWithChildren) {
    return (
        <TemplateFooterItem name="Quick Links" items={items}/>
    )
};
