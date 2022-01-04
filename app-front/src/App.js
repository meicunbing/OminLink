import * as React from "react";
import {Admin, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import {UserList} from "./users";
import {PostCreate, PostEdit, PostList} from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./admin/Dashboard";
import authProvider from "./admin/authProvider";
import dataProvider from "./admin/dataProvider";
import NotFound from "./error/NotFound";
import englishMessages from "ra-language-english";
import chineseMessages from "ra-language-chinese"
import frenchMessages from "ra-language-french"
import themeReducer from "./admin/themeReducer";
import Layout from "./layout/OminLinkLayout";

// https://marmelab.com/react-admin/Admin.html
const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return frenchMessages
    }else if(locale === 'zh'){
        return chineseMessages
    }

    // Always fallback on english
    return englishMessages;
}, 'zh');
const App = () => (
    <Admin title="OminLink 全链通，打通服务型企业销售、服务、客户关系环节" dashboard={Dashboard} authProvider={authProvider}
           dataProvider={dataProvider} customReducers={{ theme: themeReducer }}
           layout={Layout} catchAll={NotFound} i18nProvider={i18nProvider} disableTelemetry>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
)

export default App;