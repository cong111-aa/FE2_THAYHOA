import { Table } from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Role",
        dataIndex: "role",
    },
]

const data = [
    {
        key: 1,
        name: "thanh cong",
        email: "congthanh@gmail.com",
        role: "admin",
    },
    {
        key: 2,
        name: "thanh cong",
        email: "congthanh@gmail.com",
        role: "user",
    },
    {
        key: 3,
        name: "thanh cong",
        email: "congthanh@gmail.com",
        role: "admin",
    },
];

export default function UserTable() {
    return (
        <Table columns={columns} dataSource={data} />
    );
}