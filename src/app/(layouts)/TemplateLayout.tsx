'use client'

import { FooterBlock } from '@/widgets/footer/public';
import { HeaderBlock } from '@/widgets/header/public';
import { Layout, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { PropsWithChildren } from 'react';

const { useToken } = theme;

function TemplateLayout(props: PropsWithChildren) {
    const { token } = useToken();

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        height: "auto",
        paddingInline: 48,
        backgroundColor: token.colorBgContainer,
    };

    const contentStyle: React.CSSProperties = {
        height: 'auto',
        textAlign: 'center',
        minHeight: '500px',
        paddingBlock: 50,
        paddingInline: 48,
        backgroundColor: token.colorPrimary,
    };

    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        backgroundColor: token.colorBgContainer,
    };

    const layoutStyle = {
        overflow: 'hidden',
        width: '100%',
        minHeight: '100vh',
    };
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}><HeaderBlock /></Header>
            <Content style={contentStyle}>{props.children}</Content>
            <Footer style={footerStyle}><FooterBlock /></Footer>
        </Layout>
    )
}

export default TemplateLayout;
