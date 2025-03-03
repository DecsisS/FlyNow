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
        lineHeight: '64px',
        backgroundColor: token.colorBgContainer,
    };

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: '500px',
        lineHeight: '120px',
        backgroundColor: token.colorPrimary,
        color: token.colorTextBase,
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
