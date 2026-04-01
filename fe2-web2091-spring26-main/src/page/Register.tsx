import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export default function Register() {
    const { setAuth } = useAuthStore();

    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.post("http://localhost:3000/users", values);
            return res.data;
        },
        onSuccess: (data) => {
            // giả sử API trả về user + token
            setAuth(data.user, data.token);
        },
    });

    return (
        <Form onFinish={mutate} layout="vertical">
            <Form.Item name="username" label="Username">
                <Input />
            </Form.Item>

            <Form.Item name="email" label="Email">
                <Input />
            </Form.Item>

            <Form.Item name="password" label="Password">
                <Input.Password />
            </Form.Item>

            <Button htmlType="submit">Register</Button>
        </Form>
    );
}