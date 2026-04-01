import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditStory() {
    const { id } = useParams();
    const [form] = Form.useForm();

    const { data } = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        },
        enabled: !!id,
    });

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form]);

    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Ten truyen" name="title">
                <Input />
            </Form.Item>

            <Form.Item name="author" label="Tác giả">
                <Input />
            </Form.Item>

            <Form.Item name="image" label="Ảnh">
                <Input />
            </Form.Item>

            <Button htmlType="submit">Submit</Button>
        </Form>
    );
}