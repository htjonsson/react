import React from 'react';
import { Divider, Button, } from 'antd';

import CreateConnectionDrawer from './CreateConnectionDrawer';

const ConnectionContent = () => (
    <>
        <Divider orientation="left">Connections</Divider>
        <Button type="primary">Create Connection</Button>

        <CreateConnectionDrawer/>
    </>
);

export default ConnectionContent;