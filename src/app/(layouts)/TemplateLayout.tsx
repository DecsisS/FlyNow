import { HeaderBlock } from '@/widgets/header/public';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { PropsWithChildren } from 'react';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: "auto",
    paddingInline: 48,
    lineHeight: '64px',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '500px',
    lineHeight: '120px',
    color: '#171717',
    backgroundColor: '#fff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
};

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh',
};

function TemplateLayout(props: PropsWithChildren) {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}><HeaderBlock /></Header>
            <Content style={contentStyle}>{props.children}</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    )
}

export default TemplateLayout;
