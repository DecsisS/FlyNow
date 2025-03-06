import { StartBlock } from "@/widgets/homePageBlocks/startBlock/public";
import { PartnersBlock } from "@/widgets/partners/public";
import { Flex } from "antd";

export function HomePage() {
    return (
        <Flex vertical gap={20}>
            <StartBlock />
            <PartnersBlock />
        </Flex>
    )
};