import { useState } from 'react';
import { Divider, Button, } from 'antd';

import CreateConnectionDrawer from '../drawers/CreateConnectionDrawer';
import CreateProjectModal from '../modals/CreateProjectModal';

const ConnectionContent = () => {
    const [visible, setVisible] = useState(true);

    const handleOk = () => {
        alert("handle Ok");
        setVisible(false);
    }

    const handleCancel = () => {
        alert("handle Cancel");
        setVisible(false);
    }

    return (
        <>
            <Divider orientation="left">Connections</Divider>
            <Button type="primary">Create Connection</Button>

            {/* <CreateConnectionDrawer/> */}
            <CreateProjectModal visible={visible} onOk={handleOk} onCancel={handleCancel}/>
        </>
    );
}

export default ConnectionContent;