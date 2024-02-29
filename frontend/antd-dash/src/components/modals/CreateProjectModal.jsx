import { Button,  Modal, Form, Input } from 'antd';
const { TextArea } = Input;
import PropTypes from 'prop-types';

const CreateProjectModal = ({visible, onOk, onCancel}) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        console.log(values);
        // handleOk(values);
        onOk();
    }
    
    const handleCancel = () => {
        form.resetFields()
        onCancel();
    };

    const defaultValues = {
        "name": "name",
        "description": "description"
    };

    return (
        <>
            <Modal 
                title="CREATE NEW PROJECT" 
                open={visible} 
                onOk={form.submit} 
                onCancel={handleCancel}
            >
                <Form 
                    form={form} 
                    onFinish={handleFinish}
                    layout="vertical"
                    autoComplete="off"
                    initialValues={defaultValues}                                        
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a name',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                    >
                        <TextArea rows={4} />
                    </Form.Item>                    
                </Form>
            </Modal>
        </>
      )
};

CreateProjectModal.propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
}

export default CreateProjectModal;