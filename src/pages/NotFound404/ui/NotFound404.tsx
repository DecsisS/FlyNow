import { Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import Link from "next/link";
import sadSmile from '@/shared/lib/imgs/icons/smiles/sadSmile.webp'
import { VerticalAlignBottomOutlined } from "@ant-design/icons";

export function NotFound404() {
    return (
        <Flex align="center" justify="center" style={{
            height: '400px',
        }}>
            <Flex vertical gap={20} justify="center">
                <Flex align="center" gap={10}>
                    <Image src={sadSmile} alt='Sad smile' width={50} />
                    <Title level={3}>
                        404 Not Found
                    </Title>
                </Flex>
                <Paragraph>Could not find requested resource</Paragraph>
                <Flex vertical>
                    <VerticalAlignBottomOutlined style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '30px'
                    }} />
                    <Link href="/" style={{
                        lineHeight: '50px'
                    }}>Return Home</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}