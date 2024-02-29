import { Button,  Modal, Form } from 'antd';

const ModifyProjectModal = ({visible, handleOk, handleCancel}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        handleOk(values);
    }
    
    const onCancel = () => {
        setVisible(false)
        form.resetFields()
        handleCancel();
    };

    return (
        <>
            <Modal open={visible} onOk={form.submit} onCancel={onCancel}>
                <Form form={form} onFinish={onFinish}>
                    {/* Any input */}
                </Form>
            </Modal>
        </>
      )
};

ModifyProjectModal.propTypes = {
    visible: propTypes.boolean,
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func
}

export default ModifyProjectModal;