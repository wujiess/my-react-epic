import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 600px;
    margin: auto;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

const Component = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validateUsername = () => ({
        validator(rule: any, value: string) {
            if (/\W/.test(value)) {
                return Promise.reject(new Error('不能出现字母数字下划线以外的字符'));
            }
            if (value.length < 3) {
                return Promise.reject('用户名的长度不能小于3位');
            }
            if (value.length > 12) {
                return Promise.reject('用户名的长度不能大于12位');
            }
            else {
                return Promise.resolve();
            }
        }
    });

    return (
        <Wrapper>
            <Title>登录</Title>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        { required: true, message: '请输入用户名' },
                        validateUsername,
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        { required: true, message: '请输入密码' },
                        { min: 4, message: "最小长度4个字符" },
                        { max: 16, message: "最大长度16个字符" },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default Component;