import * as React from "react";
import {Admin, Resource, Layout} from 'react-admin';
import {UserList} from "./users";
import {PostCreate, PostEdit, PostList} from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./admin/Dashboard";
import authProvider from "./admin/authProvider";
import dataProvider from "./admin/dataProvider";
import NotFound from "./error/NotFound";

// https://marmelab.com/react-admin/Admin.html
const App = () => (
    <Admin title="OminLink 全链通，打通服务型企业销售、服务、客户关系环节" dashboard={Dashboard} authProvider={authProvider}
           dataProvider={dataProvider} disableTelemetry catchAll={NotFound}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
)

export default App;