import { Typography } from "antd";
import Link from "next/link";
import { ItemType } from "./types";

interface Props {
    item: ItemType
}

function FooterLink(props: Props) {
    const { item } = props

    return (
        <Link key={item.text} href={item.link}>
            <object>
                <Typography.Link>
                    {item.text}
                </Typography.Link>
            </object>
        </Link>
    )
}

export default FooterLink;
