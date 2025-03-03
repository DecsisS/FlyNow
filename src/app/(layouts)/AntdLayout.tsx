import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { PropsWithChildren } from 'react'

function AntdLayout(props: PropsWithChildren) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={{
                token: {
                    fontFamily: 'inherit',
                    colorPrimary: "#fafafa",
                    colorSuccess: "#bdbdbd",
                    colorText: "#e0e0e0",
                    colorTextBase: "#0f0f0f",
                    colorBgBase: '#185CFF',
                    colorBgContainer: '#185CFF',
                },
            }}>
                {props.children}
            </ConfigProvider>
        </AntdRegistry>
    )
}

export default AntdLayout;
