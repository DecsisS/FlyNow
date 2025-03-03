import { TemplateFooterItem } from "@/shared/ui/public"
import { PropsWithChildren } from "react"
import mailIcon from '@/shared/lib/icons/commonIcons/mail.svg';
import telIcon from '@/shared/lib/icons/commonIcons/telephone.svg';
import locateIcon from '@/shared/lib/icons/commonIcons/location.svg';

const items = [
    {
        text: 'flynow@info.co.us',
        icon: mailIcon,
    },
    {
        text: '+1 601-201-5580',
        icon: telIcon,
    },
    {
        text: '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
        icon: locateIcon,
    },
];

export function ContactInfo(props: PropsWithChildren) {
    return (
        <TemplateFooterItem name="Contact Us" items={items}/>
    )
};
