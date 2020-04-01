import React from 'react';

import { Layout } from 'react-admin';
//import MyAppBar from './MyAppBar';
import MyMenu from './Menu';

const MyLayout = (props) => <Layout
    {...props}
   // appBar={MyAppBar}
    menu={MyMenu}
    //notification={MyNotification}
/>;

export default MyLayout;