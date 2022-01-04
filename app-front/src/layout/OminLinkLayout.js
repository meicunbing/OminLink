import * as React from 'react';
import { useSelector } from 'react-redux';
import { Layout, LayoutProps } from 'react-admin';
import AppBar from './OminLinkAppBar';
import OminLinkMenu from './OminLinkMenu';
import { darkTheme, lightTheme } from './themes';
import { AppState } from '../admin/types';

const OminLinkLayout = (props: LayoutProps) => {
    const theme = useSelector((state: AppState) =>
        state.theme === 'dark' ? darkTheme : lightTheme
    );
    return <Layout {...props} appBar={AppBar} menu={OminLinkMenu} theme={theme} />;
};
export default OminLinkLayout
