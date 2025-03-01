import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { PropsWithChildren } from 'react'

function AntdLayout(props: PropsWithChildren) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: "#fafafa",
                    colorText: "#e0e0e0",
                    colorBgBase: '#4096ff',
                    colorBgContainer: '#4096ff',
                }
            }}>
                {props.children}
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default AntdLayout;
