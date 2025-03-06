import { TemplateFooterItem } from "@/shared/ui/public"
import { PropsWithChildren } from "react"
import mailIcon from '@/shared/lib/imgs/icons/commonIcons/mail.svg';
import telIcon from '@/shared/lib/imgs/icons/commonIcons/telephone.svg';
import locateIcon from '@/shared/lib/imgs/icons/commonIcons/location.svg';

const items = [
    {
        text: 'flynow@info.co.us',
        icon: mailIcon,
        link: 'mailto:flynow@info.co.us'
    },
    {
        text: '+1 601-201-5580',
        icon: telIcon,
        link: 'tel:+16012015580'
    },
    {
        text: '226 N State St, Jackson, MS 39201, US',
        icon: locateIcon,
        link: 'https://maps.app.goo.gl/892KndeR6envpXLq7'
    },
];

export function ContactInfo(props: PropsWithChildren) {
    return (
        <TemplateFooterItem name="Contact Us" items={items}/>
    )
};
