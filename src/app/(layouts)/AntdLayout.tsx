import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { PropsWithChildren } from 'react'

function AntdLayout(props: PropsWithChildren) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={{
                token: {
                    fontFamily: 'inherit',

                    colorPrimary: "#185CFF",
                    colorSuccess: "#bdbdbd",
                    colorBgLayout: "#fafafa",
                    colorText: "#0f0f0f",
                    colorTextBase: "#0f0f0f",
                    colorBgBase: '#185CFF',
                    colorBgContainer: '#185CFF',

                    colorLink: '#185CFF',
                },
                components: {
                    Menu: {
                        colorPrimary: "#fafafa",
                        colorText: "#e0e0e0",
                    },
                    Typography: {
                        colorLink: "#bdbdbd",
                        colorLinkHover: "#fafafa",
                    }
                }
            }}>
                {props.children}
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default AntdLayout;
