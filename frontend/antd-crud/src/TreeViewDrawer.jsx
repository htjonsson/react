import PropTypes from 'prop-types';
import { Drawer, Space, Button, Switch, } from 'antd';

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      FUNCTION
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const TreeViewDrawer = (props) => {

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      EVENT LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const onClose = () => {
        props.onClose();
    }

    const onSave = () => {
        console.log("onSave", props.record);
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Drawer 
                title="Resource" 
                placement="right" 
                open={props.open} 
                onClose={onClose} 
                maskClosable={false} 
                size={'default'}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onSave} type="primary">
                            Save
                        </Button>
                    </Space>
                }>
                    <>
                        <b>Boolean</b>
                        <Switch checked={false} />
                    </>
                
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

TreeViewDrawer.propTypes = {
    record: PropTypes.object,
};

export default TreeViewDrawer;